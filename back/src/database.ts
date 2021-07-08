const mongoose = require('mongoose');
const { mongodb } = require('./keys');

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const pasivosDB = mongoose
  .createConnection(mongodb.URI_PASIVOS, config)
  .then(() => console.log('DB is connected'))
  .catch((err: Error) => console.error(err));

export const pruebasDB = mongoose
  .createConnection(mongodb.URI_PRUEBAS, config)
  .then(() => console.log('DB is connected'))
  .catch((err: Error) => console.error(err));
