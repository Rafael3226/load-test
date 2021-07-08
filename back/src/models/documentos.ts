import { Schema, Document } from 'mongoose';
import { connPasivos, connPruebas } from '../database';
export interface Documento extends Document {
  _id: number;
  id_doc_pdf: string;
  codigo_tramite: string;
  nombre_tramite: string;
  codigo_sub_tramite: string;
  nombre_sub_tramite: string;
  nro_radicado_pry: string;
  codi_doc: string;
  nomb_doc: string;
  version_doc: string;
  asunto_doc: string;
  fech_cre_doc: Date;
  fech_decla_doc: Date;
  origen_doc: string;
  canal_recepcion: string;
  autor: object;
  proyector: object;
  revisor: object;
  firmante: object;
  entidad_proyecto: string;
  tipo_recurso_inf: string;
  fase_archivo: number;
  props_file: object;
  ebk_data_captura: object;
  funcion_resumen_ebk_bson_captura: string;
  hash_bson_ebk_data_captura: string;
}

const DocumentosSchema: Schema = new Schema({
  _id: Number,
  id_doc_pdf: String,
  codigo_tramite: String,
  nombre_tramite: String,
  codigo_sub_tramite: String,
  nombre_sub_tramite: String,
  nro_radicado_pry: String,
  codi_doc: String,
  nomb_doc: String,
  version_doc: String,
  asunto_doc: String,
  fech_cre_doc: Date,
  fech_decla_doc: Date,
  origen_doc: String,
  canal_recepcion: String,
  autor: Object,
  proyector: Object,
  revisor: Object,
  firmante: Object,
  entidad_proyecto: String,
  tipo_recurso_inf: String,
  fase_archivo: Number,
  props_file: Object,
  ebk_data_captura: Object,
  funcion_resumen_ebk_bson_captura: String,
  hash_bson_ebk_data_captura: String,
});

export const documentosPasivos = connPasivos.model(
  'Documentos',
  DocumentosSchema,
);
export const documentosPruebas = connPruebas.model(
  'Documentos',
  DocumentosSchema,
);
