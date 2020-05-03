import { Router } from 'express';
import loginRequierd from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequierd, fotoController.store);

export default router;
