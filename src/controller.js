import Picture from "./models/picture";
import routes from "./routes";

export const getHome = async (req, res) => {
  const pictures = await Picture.find({});
  res.render("home", { pageTitle: "About us", pictures });
};

export const getGallery = async (req, res) => {
  const pictures = await Picture.find({});
  res.render("gallery", { pageTitle: "Gallery", pictures });
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
  console.log(req.file);
  const newPicture = await Picture.create({
    fileUrl: location,
    cb: CB,
  });

  res.redirect(routes.home);
};
