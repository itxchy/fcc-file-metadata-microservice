const multer  = require('multer');
const express = require('express');
const router  = express.Router();


// multer set-up
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: '5MB'
    }
});


router.post('/', upload.single('fileUpload'), (req, res) => {

    let formattedFileSize = {
        file_name: req.file.originalname,
        file_size: req.file.size
    };

    return res.json(formattedFileSize);
});

module.exports = router;