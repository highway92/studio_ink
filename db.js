import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/studio", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected on DB");
const handelError = (error) => console.log("❌ Error on DB");
db.once("open", handleOpen);
db.on("error", handelError);
