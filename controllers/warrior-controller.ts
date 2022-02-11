import {NextFunction, Request, Response} from "express";

function addWarrior(req: Request, res: Response, next: NextFunction): void {
    res.render("warrior/warrior-added");
}

function showWarriorForm(req: Request, res: Response, next: NextFunction): void {
    res.render("warrior/add-form");
}



export {addWarrior, showWarriorForm}