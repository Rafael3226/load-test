import { Router } from 'express';

const router: Router = Router();

import { indexController } from '../controllers';

router.get('/', indexController.index);

export default router;
