import {NextFunction, Request, Response} from "express";

function addWarrior(req: Request, res: Response, next: NextFunction): void {
    res.send("add warrior");
}

function showWarriorForm(req: Request, res: Response, next: NextFunction): void {
    res.send("show warrior form");
}



export {addWarrior, showWarriorForm}