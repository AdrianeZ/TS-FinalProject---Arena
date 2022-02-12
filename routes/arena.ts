import {Router} from "express";
import {showArenaForm, fight} from "../controllers/arena-controller";


const router = Router();

router.get("/fight-form", showArenaForm);
router.post("/fight", fight);


export {router};