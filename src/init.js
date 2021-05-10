import app from "./app";
import "./db";
import "./models/picture";
import dotenv from "dotenv";
dotenv.config();

let master = false;
global.master = master;

app.listen(process.env.PORT || 3000, () => {
  console.log("😀 Listening");
});
