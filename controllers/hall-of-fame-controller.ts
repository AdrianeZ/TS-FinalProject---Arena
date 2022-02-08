import {NextFunction, Request, Response} from "express";

function listBestWarriors(req: Request, res: Response, next: NextFunction): void {
    res.send("list best warriors");
}




export {listBestWarriors};