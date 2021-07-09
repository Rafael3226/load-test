import { DocumentoPasivos } from '../models/documentosPasivos';

export function removeId(doc: DocumentoPasivos) {
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
export const toMinutesAndSeconds = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = Number(((millis % 60000) / 1000).toFixed(0));
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
