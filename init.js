import app from "./app";
import "./db";
import "./models/picture";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("😀 Listening");
});
