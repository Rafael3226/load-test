import express from 'express';
import cors from 'cors';
// Importing Routes
import {
  documentosPasivosRoutes,
  documentosPruebasRoutes,
  loadTestRoutes,
} from './routes/documentos';

// Initialization
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/pruebas', documentosPruebasRoutes);
app.use('/pasivos', documentosPasivosRoutes);
app.use('/test', loadTestRoutes);

// Static Files

// Starting the erver
app.listen(app.get('port'), () => {
  console.log('The application is listening on port ', app.get('port'));
});
