import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import { resizeImg } from "./helper";
import cors from "cors";

const app = express();
const upload = multer();
const corsOptions = {
  origin: "*",
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get("/hello", (req, res) => {
  // Do whatever you want
  return res.status(200).send({
    test: "gooood..",
  });
});

app.post("/resize", upload.single("image"), async (req, res) => {
  // 1. Get file (zip file)
  const originalFile = req.file;
  // 2. Call function (imgDownScale)
  if (originalFile?.mimetype.startsWith("image/")) {
    // 3. Image down scale process
    const resizedBuff = await resizeImg(originalFile.buffer);

    return res.type("image/jpeg").send(resizedBuff);
  } else {
    return res.status(400).send("Only image file allowed");
  }
  // 3. Send back zip file
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
