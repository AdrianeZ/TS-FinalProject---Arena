import {NextFunction, Request, Response} from "express";

function fight(req: Request, res: Response, next: NextFunction): void {
    res.send("fight has started");
}

function showArenaForm(req: Request, res: Response, next: NextFunction): void {
    res.send("show arena form");
}



export {fight, showArenaForm}