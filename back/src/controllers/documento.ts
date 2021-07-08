import { Request, Response } from 'express';
import {
  Documento,
  documentosPasivos,
  documentosPruebas,
} from '../models/documentos';

class DocumentosPruebasController {
  public async consultar(req: Request, res: Response) {
    const { _id } = req.body;
    const newDocumento: Documento[] = await documentosPruebas.find({ _id });
    res.send({
      ...newDocumento,
    });
  }

  public async guardar(req: Request, res: Response) {
    const body = req.body;
    const newDocumento: Documento = new documentosPruebas({ ...body });
    await newDocumento.save();
    res.send('OK');
  }
}

class DocumentosPasivosController {
  public async consultar(req: Request, res: Response) {
    const { _id } = req.body;
    const newDocumento: Documento[] = await documentosPasivos.find({ _id });
    res.send({
      ...newDocumento,
    });
  }

  // public async guardar(req: Request, res: Response) {
  //   const body = req.body;
  //   const newDocumento: Documento = new documentosPasivos({ ...body });
  //   await newDocumento.save();
  //   res.send('OK');
  // }
}

export const documentosPruebasController = new DocumentosPruebasController();
export const documentosPasivosController = new DocumentosPasivosController();
