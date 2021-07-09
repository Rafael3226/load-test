import { Request, Response } from 'express';
import path from 'path';
import workerpool from 'workerpool';

class LoadTestController {
  public static async test(req: Request, res: Response) {
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
export default LoadTestController;
