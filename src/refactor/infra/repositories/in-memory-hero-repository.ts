import { Hero } from "../../domain/Hero";
import { IHeroRepository } from "../../domain/interfaces/hero-repository";

export class InMemoryHeroRepository implements IHeroRepository {
    getAllHeroes(): Hero[] {
        const batman = new Hero('Batman')
        return [batman, batman]
    }


    getHeroById(id: string): Hero {
        const batman = new Hero('Batman')
        return batman
    }
}