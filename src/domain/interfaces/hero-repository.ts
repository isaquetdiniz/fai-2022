import { Hero } from "../Hero";

export interface IHeroRepository {
    getAllHeroes(): Hero[]
    getHeroById(id: string): Hero
}