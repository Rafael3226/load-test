import { documentosPasivos, documentosPruebas } from '../models/documentos';

const workerpool = require('workerpool');

// a deliberately inefficient implementation of the fibonacci sequence
async function add(id: number) {
  const pasivosDoc = await documentosPasivos.findById(id);
  if (pasivosDoc) {
    try {
      await documentosPruebas.insertMany([pasivosDoc]);
    } catch (e) {
      console.log(`ERROR EN ADD: ${e.message}`);
    }
  }
}

// create a worker and register public functions
workerpool.worker({
  add,
});
