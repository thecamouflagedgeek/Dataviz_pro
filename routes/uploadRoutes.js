const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("mongoose");

const router = express.Router();

// MongoDB Schema (Dynamic - Stores Whatever is in CSV)
const DataSchema = new mongoose.Schema({}, { strict: false });
const DataModel = mongoose.model("Data", DataSchema);

// Ensure uploads folder exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// 📌 Route: Upload & Process CSV
router.post("/upload", upload.single("file"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded!" });
    }

    const filePath = req.file.path;
    const results = [];

    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
            row.filename = req.file.filename; // ✅ Tag each row with the filename
            results.push(row);
        })
        .on("end", async () => {
            try {
                await DataModel.insertMany(results);
                fs.unlinkSync(filePath); // ✅ Delete file after processing
                res.status(200).json({
                    message: "CSV file parsed & full data saved!",
                    filename: req.file.filename,
                    savedRecords: results.length
                });
            } catch (error) {
                res.status(500).json({ message: "Error saving to database", error });
            }
        })
        .on("error", (error) => {
            res.status(500).json({ message: "Error processing file", error });
        });
});

// 📌 Route: Fetch All Uploaded Data
router.get("/data", async (req, res) => {
    try {
        const data = await DataModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
});

module.exports = router;
