import { Router } from 'express'
import { HeroesController } from '../controllers/heroes-controller'

const controller = new HeroesController()

const router = Router()

router.route('/heroes')
    .get(controller.getAll)

router.route('/heroes/:id')
    .get(controller.getById)

export default router