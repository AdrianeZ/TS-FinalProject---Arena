import * as express from "express";
import * as methodOverride from "method-override";
import "./utils/db";
import {static as expressStatic, urlencoded} from "express";
import {engine} from "express-handlebars";
import {handlebarsHelpers} from "./utils/handlebars/helpers";
import {router as homeRouter} from "./routes/home";
import {router as warriorRouter} from "./routes/warrior";
import {router as arenaRouter} from "./routes/arena";
import {router as hallOfFameRouter} from "./routes/hall-of-fame";
import {handleError} from "./controllers/errorController";

const app = express();

app.use(methodOverride("_method"));
app.use(urlencoded({
    extended: true
}));


app.use(expressStatic(`${__dirname}/public`));
app.engine(".hbs", engine({
    extname: ".hbs",
    helpers:handlebarsHelpers
}))

app.set("view engine", ".hbs");

app.use("/", homeRouter);
app.use("/warriors", warriorRouter);
app.use("/arena", arenaRouter);
app.use("/hall-of-fame", hallOfFameRouter);

app.use(handleError);

app.listen(3000, (): void => console.log("app listen on http://localhost:3000"));

