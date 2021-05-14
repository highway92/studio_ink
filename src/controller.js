import Picture from "./models/picture";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

export const getHome = async (req, res) => {
  const pictures = await Picture.find({}).sort({ _id: -1 });
  res.render("home", { pageTitle: "About us", pictures });
};

export const getGallery = async (req, res) => {
  let pictures = await Picture.find({}).sort({ _id: -1 });
  let Cpictures = await Picture.find({ cb: "color" }).sort({ _id: -1 });
  let Bpictures = await Picture.find({ cb: "black" }).sort({ _id: -1 });

  res.render("gallery", {
    pageTitle: "Gallery",
    pictures,
    Cpictures,
    Bpictures,
  });
};

export const getNotice = (req, res) => {
  res.render("notice", { pageTitle: "Notice" });
};

export const getUpload = (req, res) => {
  res.render("upload");
};

export const postUpload = async (req, res) => {
  const {
    body: { CB },
    file: { location },
  } = req;
  const newPicture = await Picture.create({
    fileUrl: location,
    cb: CB,
  });

  res.redirect(routes.home);
};

export const getlogin = (req, res) => {
  res.render("login");
};

export const postlogin = (req, res) => {
  const {
    body: { email, password },
  } = req;
  const id = process.env.ADMIN_ID;
  const pass = process.env.ADMIN_PASSWORD;
  if (id == email && pass == password) {
    master = true;
    res.redirect(routes.home);
  } else {
    res.redirect(routes.login);
  }
};

export const getlogout = (req, res) => {
  master = false;
  res.redirect(routes.home);
};

export const getdelete = async (req, res) => {
  const {
    params: { id },
  } = req;
  await Picture.findOneAndRemove({ _id: id });

  res.redirect(routes.home);
};
