import { Hero } from "../Hero"
import { IHeroRepository } from "../interfaces/hero-repository"
import { Usecase } from "../interfaces/usecase"

export class GetAllHeroesUsecase implements Usecase<Hero[]> {
    private readonly heroRepository: IHeroRepository
    constructor(heroRepository: IHeroRepository) {
        this.heroRepository = heroRepository
    }

    execute() {
        const heroes = this.heroRepository.getAllHeroes()
        return heroes
    }
}