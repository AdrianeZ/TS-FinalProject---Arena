import {ValidationError} from "../utils/ValidationError";
import {v4 as uuid} from "uuid"
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type WarriorResult = [Warrior[], FieldPacket[]]


class Warrior {
    public readonly id?: string;
    public readonly name: string;
    public readonly power: number;
    public readonly defense: number;
    public readonly stamina: number;
    public readonly agility: number;
    public wins?: number;

    constructor(obj: Omit<Warrior, "insert" | "update">) {
        const {id, name, power, defense, stamina, agility, wins} = obj;
        this.validate([power, defense, stamina, agility], name);

        this.id = id ?? uuid();
        this.name = name;
        this.power = power;
        this.defense = defense;
        this.stamina = stamina;
        this.agility = agility
        this.wins = wins ?? 0;

    }

    private validate(stats: number[], name: string): void {
        const sum = stats.reduce((previousValue, currentValue) => previousValue + currentValue);
        if (sum !== 10) throw new ValidationError(`suma wszystkich statystyk musi wynosić 10, aktualnie jest to ${sum}.`);
        for (const stat of stats) {
            if (stat < 1) throw new ValidationError(`Każda ze statystyk musi wynosić przeynajmniej 1 ta zasada 
            została złamana dla ${stat}`);
        }
        if (name.length < 3 && name.length > 50) throw new ValidationError(`Imię musi posiadać od 3 do 50 znaków, akt
        ualnie wynosi ${name.length}`);
    }

    async insert(): Promise<string> {
        await pool.execute
        ("INSERT INTO `warriors` VALUES(:id, :name, :power, :defense, :stamina, :agility, :wins)", {
            id: this.id,
            name: this.name,
            power: this.power,
            defense: this.defense,
            stamina: this.stamina,
            agility: this.agility,
            wins: this.wins
        });

        return this.id;
    }

    async update(): Promise<void> {
        await pool.execute("UPDATE `warriors` SET `wins` = :wins WHERE id = :id",
            {
                id: this.id,
                wins: this.wins
            })
    }

    static async getOne(id: string): Promise<Warrior | null> {
        const [results] = await pool.execute("SELECT * FROM `warriors` WHERE id=:id", {id}) as WarriorResult;
        return results.length === 0 ? null : new Warrior(results[0]);

    }

    static async getAll(): Promise<Warrior[]> {
        const [results] = await pool.execute("SELECT * FROM `warriors") as WarriorResult;
        return results.map(warrior => new Warrior(warrior));
    }

    static async getTop(topCount: number): Promise<Warrior[]> {
        const [results] = await pool.execute
        ("SELECT * FROM `warriors` ORDER BY `wins` DESC LIMIT :count", {count: topCount}) as WarriorResult;
        return results.map(warrior => new Warrior(warrior));
    }

    static async isNameTaken(name: string): Promise<boolean> {
        const [results] = await pool.execute("SELECT `name` FROM `warriors` WHERE name=:name", {name}) as [{ name: string }[], FieldPacket[]];
        return results[0]?.name === name;
    }

}


export {Warrior};
