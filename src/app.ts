import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/testGood", (req, res) => {
  // Do whatever you want
  return res.status(200).send({
    test: "gooood..",
  });
});

app.post("/image-down", (req, res) => {
  // 1. Get file (zip file)
  // 2. Call function (imgDownScale)
  // 3. Send back zip file
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
