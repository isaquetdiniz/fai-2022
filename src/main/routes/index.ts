import { Router } from 'express';

import { makeUserController } from '@/main/factories/controllers';

const router = Router();

const userController = makeUserController();

router.post('/users', (req, res) => userController.create(req, res));
router.get('/users', async (req, res) => userController.list(req, res));
router.patch('/users/:id', (req, res) => userController.update(req, res));
router.delete('/users/:id', (req, res) => userController.delete(req, res));

export { router };
