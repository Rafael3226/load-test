const mongoose = require('mongoose');
const { mongodb } = require('./keys');

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .createConnection(mongodb.URI_PRUEBAS, { ...config, dbName: 'mng_carga' })
  .catch((err: Error) => console.error(err));
export const connPruebas = mongoose.connections[1];

mongoose
  .createConnection(mongodb.URI_PASIVOS, {
    ...config,
    dbName: 'ebk_pasivoslaborales',
  })
  .catch((err: Error) => console.error(err));
export const connPasivos = mongoose.connections[2];
