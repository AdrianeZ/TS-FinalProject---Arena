import {NextFunction, Request, Response} from "express";
import {ValidationError} from "../utils/ValidationError";

function handleError(err:Error, req:Request, res:Response, next:NextFunction): void
{
    console.log(err);
    res.status(err instanceof ValidationError ? 400 : 500).render("error",
        {
            message: err instanceof ValidationError ? err.message : "Przepraszmy spróbuj ponownie"
        });
}

export {handleError}