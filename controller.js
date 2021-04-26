export const getHome = (req, res) => {
  res.render("home", { pageTitle: "ABOUT US" });
};

export const getGallery = (req, res) => {
  res.send("gallary");
};

export const getNotice = (req, res) => {
  res.send("NOTICE");
};
