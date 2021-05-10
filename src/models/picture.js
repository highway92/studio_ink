import mongoose from "mongoose";

const pictureschema = new mongoose.Schema({
  fileUrl: {
    type: String,
  },
  cb: {
    type: String,
  },
});

const model = mongoose.model("Picture", pictureschema);
export default model;
