import express from 'express';

// Importing Routes
import IndexRoutes from './routes'

// Initialization
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Routes
app.use(IndexRoutes);

// Static Files

// Starting the erver
app.listen(app.get('port'), () => {
  console.log('The application is listening on port ',app.get('port'));
});
