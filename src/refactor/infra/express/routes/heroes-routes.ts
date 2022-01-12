import { Router, Request, Response } from 'express'
import { getAllHeroesControllerFactory } from '../../../main/factories/get-all-heroes-controller-factory'
import { getHeroByIdControllerFactory } from '../../../main/factories/get-hero-by-id-controller-factory'

const router = Router()

const expressRouteAdapter = async (controller: any) => {
    return async (req: Request, res: Response) => {
        const heroes = controller.handle(req)

        res.json(heroes)
    }
}

router.route('/heroes')
    .get(async (req: Request, res: Response) => {
        const heroes = getAllHeroesControllerFactory().handle(req)

        res.json(heroes)
    })

router.route('/heroes/:id')
    .get(async (req: Request, res: Response) => {
        const hero = getHeroByIdControllerFactory().handle(req)

        res.json(hero)
    })

export default router