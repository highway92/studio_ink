import app from "./app";
import "./db";
import "./models/picture";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT || 3000, () => {
  console.log("😀 Listening");
});
