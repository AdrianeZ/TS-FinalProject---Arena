import {Router} from "express";
import {showArenaForm} from "../controllers/arena-controller";


const router = Router();

router.get("/fight-form", showArenaForm);
router.post("/fight", showArenaForm);


export {router};