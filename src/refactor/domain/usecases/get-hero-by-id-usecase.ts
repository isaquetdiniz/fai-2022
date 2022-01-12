import { Hero } from "../Hero"
import { IHeroRepository } from "../interfaces/hero-repository"
import { Usecase } from "../interfaces/usecase"

export class GetHeroByIdUsecase implements Usecase<Hero> {
    private readonly heroRepository: IHeroRepository
    constructor(heroRepository: IHeroRepository) {
        this.heroRepository = heroRepository
    }

    execute(id: string) {
        const hero = this.heroRepository.getHeroById(id)
        return hero
    }
}