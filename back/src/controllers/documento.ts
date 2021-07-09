import { Request, Response } from 'express';
import { documentosPasivos, documentosPruebas } from '../models/documentos';
const workerpool = require('workerpool');
const path = require('path');

class LoadTestController {
  public async test(req: Request, res: Response) {
    try {
      const tiempoIni: Date = new Date();
      let tiempoFin: Date;
      const { hilos, inicio, fin } = req.query;
      // create a worker pool using an external worker script
      const pool = workerpool.pool(path.join(__dirname, 'workers.js'), {
        maxWorkers: Number(hilos),
      });
      for (let i = Number(inicio); i <= Number(fin); i++) {
        pool
          .exec('add', [i])
          .catch((err: Error) => {
            console.error(err);
          })
          .then(() => {
            const stats = pool.stats();
            const pendientes: number = stats.pendingTasks;
            // terminate all workers when done
            if (pendientes === 0) {
              tiempoFin = new Date();
              pool.terminate();
              res.send({
                message: `${tiempoFin.getTime() - tiempoIni.getTime()} ms`,
              });
            }
          });
      }
    } catch (e) {
      res.send({ message: e.message });
    }
  }
}
class DocumentosPruebasController {
  public async consultar(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const newDocumento = await documentosPruebas.findById(id);
      res.send(newDocumento);
    } catch (e) {
      res.send({ message: e.message });
    }
  }

  public async guardar(req: Request, res: Response) {
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
class DocumentosPasivosController {
  public async consultar(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const newDocumento = await documentosPasivos.findById(id);
      res.send(newDocumento);
    } catch (e) {
      res.send({ message: e.message });
    }
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
export const loadTestController = new LoadTestController();
