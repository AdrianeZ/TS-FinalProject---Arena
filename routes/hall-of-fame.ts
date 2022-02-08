import {Router} from "express";
import {listBestWarriors} from "../controllers/hall-of-fame-controller";


const router = Router();

router.get("/", listBestWarriors);



export {router};