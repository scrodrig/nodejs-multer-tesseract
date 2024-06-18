const express = require('express');
const app = express();
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('uploadedImage'), (req, res) => {
  console.log(req.file);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});