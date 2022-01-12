import { GetAllHeroesUsecase } from "../../domain/usecases/get-all-heroes-usecase"
import { InMemoryHeroRepository } from "../../infra/repositories/in-memory-hero-repository"
import { HttpController } from "../../presentation/http-controller"

export const getAllHeroesControllerFactory = () => {
    const inMemoryHeroRepository = new InMemoryHeroRepository()
    const getAllHeroesUsecase = new GetAllHeroesUsecase(inMemoryHeroRepository)

    return new HttpController(getAllHeroesUsecase)
}