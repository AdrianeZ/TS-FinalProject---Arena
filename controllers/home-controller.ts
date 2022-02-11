import {NextFunction, Request, Response} from "express";

function homeController(req: Request, res: Response, next: NextFunction): void {
    res.render("home/home");
}

export {homeController}