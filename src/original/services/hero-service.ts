import { HeroesRepository } from '../repositories/heroes-repository'

const heroesRepository = new HeroesRepository()

export class HeroService {
    getAllHeroes() {
        return heroesRepository.getAll()
    }

    getHeroById(id: string) {
        return heroesRepository.getById(id)
    }
}