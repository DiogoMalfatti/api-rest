import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index --> lista todos os usuarios --> GET
store/create --> cria um novo usuario --> POST
delete --> apaga um usuario --> DELETE
show --> mostra um usuario --> GET
update --> atualiza um usuario --> PATCH ou PUT
*/
