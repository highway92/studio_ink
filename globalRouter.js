import express from "express";
import routes from "./routes";
import {
  getHome,
  getGallery,
  getNotice,
  getUpload,
  postUpload,
} from "./controller";
import { uploadMiddleware } from "./middlewares";
const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);
globalRouter.get(routes.gallery, getGallery);
globalRouter.get(routes.notice, getNotice);
globalRouter.get(routes.upload, getUpload);
globalRouter.post(routes.upload, uploadMiddleware, postUpload);

export default globalRouter;
