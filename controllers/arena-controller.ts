import {NextFunction, Request, Response} from "express";
import {Warrior} from "../models/Warrior";
import {ValidationError} from "../utils/ValidationError";
import {Fight} from "../src/Fight";

async function fight(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {warrior1: warrior1Id, warrior2: warrior2Id} = req.body as { warrior1: string, warrior2: string };
    try {
        if (warrior1Id === warrior2Id) throw new ValidationError("Proszę wybrać dwóch róźnych przeciwników");

        const warrior1 = await Warrior.getOne(warrior1Id);
        const warrior2 = await Warrior.getOne(warrior2Id);

        if (!warrior1) throw new ValidationError("Nie znaleziono przeciwnika numer jeden");
        if (!warrior2) throw new ValidationError("Nie znaleziono przeciwnika numer dwa");

        const {log, winner} = new Fight(warrior1, warrior2).fight();
        console.log(log);
        winner.wins++;
        await winner.update();

        res.render("arena/fight", {log});
    }
    catch (error) {
        return next(error);
    }

}

async function showArenaForm(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const warriors = await Warrior.getAll();
        res.render("arena/fight-form", {warriors});
    } catch (error) {
        return next(error);
    }

}


export {fight, showArenaForm}