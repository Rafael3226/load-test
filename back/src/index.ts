import express from 'express';

// Importing Routes
import {
  documentosPasivosRoutes,
  documentosPruebasRoutes,
} from './routes/documentos';

// Initialization
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/pruebas', documentosPruebasRoutes);
app.use('/pasivos', documentosPasivosRoutes);

// Static Files

// Starting the erver
app.listen(app.get('port'), () => {
  console.log('The application is listening on port ', app.get('port'));
});
