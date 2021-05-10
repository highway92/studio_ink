const HOME = "/";
const GALLERY = "/gallery";
const NOTICE = "/notice";
const UPLOAD = "/upload";
const LOGIN = "/login";
const LOGOUT = "/logout";
const DELETE = "/:id/delete";

const routes = {
  home: HOME,
  gallery: GALLERY,
  notice: NOTICE,
  upload: UPLOAD,
  login: LOGIN,
  logout: LOGOUT,
  delete: (id) => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return DELETE;
    }
  },
};

export default routes;
