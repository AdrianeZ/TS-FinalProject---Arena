import {Router} from "express";
import {homeController} from "../controllers/home-controller";
import {addWarrior, showWarriorForm} from "../controllers/warrior-controller";

const router = Router();

router.route("/").post(addWarrior)
router.get("/add-form", showWarriorForm);


export {router};