const Tesseract = require("tesseract.js");

const uploadImage = async (req, res) => {
  console.log(req.file);

  try {
    const worker = await Tesseract.createWorker("por");
    const ret = await worker.recognize("uploads/" + req.file.filename);
    console.log(ret.data.text);
    await worker.terminate();

    return res.json({ text: ret.data.text });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { uploadImage };
