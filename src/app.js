import "@babel/polyfill";
import express from "express";
import routes from "./routes";
import path from "path";
import cookieParser from "cookie-parser";
import globalRouter from "./globalRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(express.static("public"));

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
