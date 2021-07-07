import { Router } from 'express';
import { documentosController } from '../controllers/documentos';

class DocumentosRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/consultar', documentosController.consultar);
    this.router.post('/guardar', documentosController.guardar);
  }
}

const documentosRoutes = new DocumentosRoutes();
export default documentosRoutes.router;
