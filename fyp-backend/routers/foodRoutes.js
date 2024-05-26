const express = require("express");
const multer = require("multer");
const { uploadImageAndProcess,task } = require("../controllers/foodController");

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, "image.jpg");
  },
});

const upload = multer({ storage: storage });

router.route('/predict').post(task)

router.post("/upload", upload.single("image"), uploadImageAndProcess);

module.exports = router;
