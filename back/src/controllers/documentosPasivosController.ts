import { Request, Response } from 'express';
import { documentosPasivos } from '../models/documentosPasivos';

class DocumentosPasivosController {
  public static async consultar(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const newDocumento = await documentosPasivos.findById(id);
      res.send(newDocumento);
    } catch (e) {
      res.send({ message: e.message });
    }
  }
}

export default DocumentosPasivosController;
