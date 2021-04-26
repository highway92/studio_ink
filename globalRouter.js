import express from "express";
import routes from "./routes";
import { getHome, getGallery, getNotice } from "./controller";
const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);
globalRouter.get(routes.gallery, getGallery);
globalRouter.get(routes.notice, getNotice);

export default globalRouter;
