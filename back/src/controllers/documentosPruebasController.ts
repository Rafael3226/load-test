import { Request, Response } from 'express';
import { documentosPruebas } from '../models/documentosPruebas';

class DocumentosPruebasController {
  public static async consultar(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const newDocumento = await documentosPruebas.findById(id);
      res.send(newDocumento);
    } catch (e) {
      res.send({ message: e.message });
    }
  }

  public static async guardar(req: Request, res: Response) {
    try {
      const body = req.body;
      const newDocumento = new documentosPruebas({ ...body });
      await documentosPruebas.save(newDocumento);
      res.send('OK');
    } catch (e) {
      res.send({ message: e.message });
    }
  }
}

export default DocumentosPruebasController;
