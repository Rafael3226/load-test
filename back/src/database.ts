const mongoose = require('mongoose');
const { mongodb } = require('./keys');

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .createConnection(mongodb.URI_PRUEBAS, config)
  .then(() => console.log('PRUEBAS DB is connected'))
  .catch((err: Error) => console.error(err));
export const connPruebas = mongoose.connections[1];
mongoose
  .createConnection(mongodb.URI_PASIVOS, config)
  .then(() => console.log('PASIVOS DB is connected'))
  .catch((err: Error) => console.error(err));
export const connPasivos = mongoose.connections[2];
