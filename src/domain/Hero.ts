import { Power } from "./Powers"
import { SuperPower } from "./SuperPower"

export class Hero {
    private name: string
    private powers: Power[]
    private superPower: SuperPower

    constructor(name: string, powers: Power[], superPower: SuperPower) {
        this.name = name
        this.powers = powers
        this.superPower = superPower
    }

    getName() {
        return this.name
    }

    getPowers() {
        return this.powers
    }

    getSuperPower() {
        return this.superPower
    }
}