import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_SECRET,
  accessKeyId: process.env.AWS_KEY,
  region: "ap-northeast-2",
});

const uploadPicture = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "studioink/picture",
  }),
});

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  next();
};

export const uploadMiddleware = uploadPicture.single("imgfile");
