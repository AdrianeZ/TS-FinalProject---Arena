import {NextFunction, Request, Response} from "express";

function listBestWarriors(req: Request, res: Response, next: NextFunction): void {
    res.render("hall-of-fame/list");
}




export {listBestWarriors};