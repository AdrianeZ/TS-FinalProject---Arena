import {NextFunction, Request, Response} from "express";
import {Warrior} from "../models/Warrior";
import {ValidationError} from "../utils/ValidationError";

async function addWarrior(req: Request, res: Response, next: NextFunction): Promise<void> {

    const warriorData = {...req.body};
    const excludeField = "name";
    for (const key in warriorData) {
        if (key !== excludeField) warriorData[key] = Number(warriorData[key]);
    }

    try {
        if (await Warrior.isNameTaken(warriorData.name)) throw new ValidationError(`Name ${warriorData[excludeField]} is already taken`);
        const newWarrior = new Warrior(warriorData);
        const id = await newWarrior.insert();
        res.render("warrior/warrior-added", {id, name: newWarrior.name});
    }
    catch (error){
        return next(error);
    }

}

function showWarriorForm(req: Request, res: Response, next: NextFunction): void {
    res.render("warrior/add-form");
}


export {addWarrior, showWarriorForm}