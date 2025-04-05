const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// File filter to allow only CSV and JSON files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "text/csv" || file.mimetype === "application/json") {
    cb(null, true);
  } else {
    cb(new Error("Only CSV and JSON files are allowed!"), false);
  }
};

// Multer upload instance
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
