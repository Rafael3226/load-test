import { Router } from 'express';
import {
  documentosPasivosController,
  documentosPruebasController,
} from '../controllers/documento';

class DocumentosPruebasRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/consultar', documentosPruebasController.consultar);
    this.router.post('/guardar', documentosPruebasController.guardar);
  }
}
class DocumentosPasivosRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/consultar', documentosPasivosController.consultar);
    // this.router.post('/guardar', documentosPasivosController.guardar);
  }
}

export const documentosPruebasRoutes = new DocumentosPruebasRoutes().router;
export const documentosPasivosRoutes = new DocumentosPasivosRoutes().router;
