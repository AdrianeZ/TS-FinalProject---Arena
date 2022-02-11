import {NextFunction, Request, Response} from "express";

function fight(req: Request, res: Response, next: NextFunction): void {
    res.render("arena/fight");
}

function showArenaForm(req: Request, res: Response, next: NextFunction): void {
    res.render("arena/fight-form");
}



export {fight, showArenaForm}