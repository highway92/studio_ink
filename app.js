import express from "express";
import routes from "./routes";
import cookieParser from "cookie-parser";
import globalRouter from "./globalRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(localsMiddleware);

app.use(routes.home, globalRouter);

export default app;
