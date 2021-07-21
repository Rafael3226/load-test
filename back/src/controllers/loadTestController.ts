import { Request, Response } from 'express';
import path from 'path';
import workerpool, { WorkerPool } from 'workerpool';
import { toMinutesAndSeconds } from '../lib/convert';

class LoadTestController {
  public static async test(req: Request, res: Response) {
    const { hilos, inicio, fin } = req.query;
    const tiempoIni = new Date();
    const MAX_QUEUE = 100000;

    const getTime = () => {
      const tiempoFin = new Date();
      const ms = tiempoFin.getTime() - tiempoIni.getTime();
      return { ms, minutes: toMinutesAndSeconds(ms) };
    };

    const poolAdd = (start: Number, end: Number, pool: WorkerPool) => {
      return new Promise((resolve, reject) => {
        try {
          for (let i = Number(start); i <= Number(end); i++) {
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
                  resolve(true);
                }
              });
          }
        } catch (e) {
          reject(e);
        }
      });
    };
    try {
      // create a worker pool using an external worker script
      const pool = workerpool.pool(path.join(__dirname, 'workers.js'), {
        maxWorkers: Number(hilos),
      });

      const diferencia = Number(fin) - Number(inicio);
      if (diferencia > MAX_QUEUE) {
        const repeticiones = diferencia / MAX_QUEUE;
        const ceil = Math.ceil(repeticiones);
        for (let i = 0; i <= ceil; i++) {
          const empieza = i * MAX_QUEUE + Number(inicio);
          const termina = i * MAX_QUEUE + MAX_QUEUE + Number(inicio);
          if (i === ceil) {
            console.log(empieza, Number(fin));
            await poolAdd(empieza, Number(fin), pool);
            console.log(empieza, Number(fin), 'end');
          } else {
            console.log(empieza, termina);
            await poolAdd(empieza, termina, pool);
            console.log(empieza, termina, 'end');
          }
        }
      } else {
        for (let i = Number(inicio); i <= Number(fin); i++) {
          await poolAdd(Number(inicio), Number(fin), pool);
        }
      }
      res.send(getTime());
    } catch (e) {
      res.send({ message: e.message });
    }
  }
}
export default LoadTestController;
