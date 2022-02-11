import {ValidationError} from "../utils/ValidationError";
import {v4 as uuid} from "uuid"


class Warrior {
    public readonly id?: string;
    public readonly name: string;
    public power: number;
    public defense: number;
    public stamina: number;
    public agility: number;
    public wins?: number;

    constructor(obj: Warrior) {
        const {id, name, power, defense, stamina, agility, wins} = obj;
        const sum = power + defense + stamina + agility;
        this.validate(sum, name);

        this.id = id ?? uuid();
        this.name = name;
        this.power = power;
        this.defense = defense;
        this.stamina = stamina;
        this.wins = wins ?? 0;

    }

    private validate(sum: number, name: string): void {
        if (sum !== 10) throw new ValidationError(`suma wszystkich statystyk musi wynosić 10, aktualnie jest to ${sum}.`);
        if (name.length < 3 && name.length > 50) throw new ValidationError(`Imię musi posiadać od 3 do 50 znaków, akt
        ualnie wynosi ${name.length}`);
    }

    async insert(): Promise<string> {

    }

    async update() {

    }

    static async getOne(id: string): Promise<Warrior> {

    }

    static async getAll(id: string): Promise<Warrior[]> {

    }

    static async getTop(topCount: number): Promise<Warrior[]> {

    }

}

export {Warrior};