import {
  DocumentoPasivos,
  documentosPasivos,
} from '../models/documentosPasivos';
import {
  DocumentoPruebas,
  documentosPruebas,
} from '../models/documentosPruebas';

const workerpool = require('workerpool');

// a deliberately inefficient implementation of the fibonacci sequence
async function add(id: number) {
  function removeId(doc: DocumentoPasivos) {
    const {
      id_doc_pdf,
      codigo_tramite,
      nombre_tramite,
      codigo_sub_tramite,
      nombre_sub_tramite,
      nro_radicado_pry,
      codi_doc,
      nomb_doc,
      version_doc,
      asunto_doc,
      fech_cre_doc,
      fech_decla_doc,
      origen_doc,
      canal_recepcion,
      autor,
      proyector,
      revisor,
      firmante,
      entidad_proyecto,
      tipo_recurso_inf,
      fase_archivo,
      props_file,
      ebk_data_captura,
      funcion_resumen_ebk_bson_captura,
      hash_bson_ebk_data_captura,
    } = doc;
    return {
      id_doc_pdf,
      codigo_tramite,
      nombre_tramite,
      codigo_sub_tramite,
      nombre_sub_tramite,
      nro_radicado_pry,
      codi_doc,
      nomb_doc,
      version_doc,
      asunto_doc,
      fech_cre_doc,
      fech_decla_doc,
      origen_doc,
      canal_recepcion,
      autor,
      proyector,
      revisor,
      firmante,
      entidad_proyecto,
      tipo_recurso_inf,
      fase_archivo,
      props_file,
      ebk_data_captura,
      funcion_resumen_ebk_bson_captura,
      hash_bson_ebk_data_captura,
    };
  }
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
