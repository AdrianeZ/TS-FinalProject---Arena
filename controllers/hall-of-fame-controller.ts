import {NextFunction, Request, Response} from "express";
import {Warrior} from "../models/Warrior";

async function listBestWarriors(req: Request, res: Response, next: NextFunction): Promise<void> {

    try {
        const warriors = await Warrior.getTop(10);
        res.render("hall-of-fame/list", warriors);
    }
    catch (error)
    {
        return next(error);
    }

}




export {listBestWarriors};