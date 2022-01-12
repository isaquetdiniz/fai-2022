import { GetHeroByIdUsecase } from "../../domain/usecases/get-hero-by-id-usecase"
import { InMemoryHeroRepository } from "../../infra/repositories/in-memory-hero-repository"
import { HttpController } from "../../presentation/http-controller"

export const getHeroByIdControllerFactory = () => {
    const inMemoryHeroRepository = new InMemoryHeroRepository()
    const getHeroByIdUsecase = new GetHeroByIdUsecase(inMemoryHeroRepository)

    return new HttpController(getHeroByIdUsecase)
}