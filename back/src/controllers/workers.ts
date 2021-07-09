import { removeId } from '../lib/convert';
import { documentosPasivos } from '../models/documentosPasivos';
import { documentosPruebas } from '../models/documentosPruebas';

const workerpool = require('workerpool');

// a deliberately inefficient implementation of the fibonacci sequence
async function add(id: number) {
  const pasivosDoc = await documentosPasivos.findById(id);
  if (pasivosDoc) {
    try {
      const pruebasDoc = removeId(pasivosDoc);
      await documentosPruebas.insertMany([pruebasDoc]);
    } catch (e) {
      console.log(`ERROR EN ADD: ${e.message}`);
    }
  }
}

// create a worker and register public functions
workerpool.worker({
  add,
});
