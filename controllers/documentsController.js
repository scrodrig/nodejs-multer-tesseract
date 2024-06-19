const Tesseract = require("tesseract.js");

let language = "eng";

// const uploadDocument = async (req, res) => {
//   console.log(req.file);
// };

const readFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
  });
};

const convertToImage = async (pdf) => {
  const images = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    images.push(page);
  }
  return images;
};

const convertToText = async (images) => {
  // const pdf = await loadFile(file);
  // const images = await convertToImage(pdf);
  // await convertToText(images);

  const worker = await Tesseract.createWorker();
  await worker.loadLanguage(language);
  await worker.initialize(language);

  for (const image of images) {
    const {
      data: { text },
    } = await worker.recognize(image);

    console.log(text);
  }

  await worker.terminate();
};

const uploadDocument = (req, res) => {
  console.log(req.files);
  const document = readFile(req.files)
  console.log('document', document)
};

module.exports = { uploadDocument };
