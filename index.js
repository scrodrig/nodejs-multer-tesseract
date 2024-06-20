const express = require("express");
const app = express();
const multer = require("multer");
// const Tesseract = require("tesseract.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(
  "/uploadImage",
  upload.single("uploadedImage"),
  require("./routes/imagesRoutes")
);

app.use(
  "/uploadDocument",
  upload.any(),
  require("./routes/documentsRouter")
);

// app.post("/upload/en", upload.single("uploadedImage"), async (req, res) => {
//   console.log(req.file);

//   try {
//     const worker = await Tesseract.createWorker("eng");
//     const ret = await worker.recognize("uploads/" + req.file.filename);
//     console.log(ret.data.text);
//     await worker.terminate();

//     return res.json({ text: ret.data.text });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.post("/upload/pt", upload.single("uploadedImage"), async (req, res) => {
//   console.log(req.file);

//   try {
//     const worker = await Tesseract.createWorker("por");
//     const ret = await worker.recognize("uploads/" + req.file.filename);
//     console.log(ret.data.text);
//     await worker.terminate();

//     return res.json({ text: ret.data.text });
//   } catch (err) {
//     console.log(err);
//   }
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
