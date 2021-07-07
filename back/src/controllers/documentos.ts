import { Request, Response } from 'express';
import DocumentoModel, { Documento } from '../models/documento';

class DocumentosController {
  public async consultar(req: Request, res: Response) {
    const { _id } = req.body;
    const Documentos = await DocumentoModel.find({ _id });
    res.send({
      ...Documentos,
    });
  }

  public async guardar(req: Request, res: Response) {
    const body = req.body;
    const newDocumento: Documento = new DocumentoModel({ ...body });
    await newDocumento.save();
    res.send('OK');
  }
}

export const documentosController = new DocumentosController();
