import { Router } from 'express';
import documentosPasivosController from '../controllers/documentosPasivosController';
import documentosPruebasController from '../controllers/documentosPruebasController';
import LoadTestController from '../controllers/loadTestController';

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
  }
}
class LoadTestRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/exec', LoadTestController.test);
  }
}

export const documentosPruebasRoutes = new DocumentosPruebasRoutes().router;
export const documentosPasivosRoutes = new DocumentosPasivosRoutes().router;
export const loadTestRoutes = new LoadTestRoutes().router;
