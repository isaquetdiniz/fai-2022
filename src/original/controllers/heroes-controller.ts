import { Request, Response } from 'express'
import { HeroService } from 'original/services/hero-service'

const heroService = new HeroService()

export class HeroesController {
    async getAll(req: Request, res: Response) {
        const heroes = heroService.getAllHeroes()
        return res.json({ message: heroes })
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params
        const hero = heroService.getHeroById(id)
        return res.json({ message: hero })
    }
}