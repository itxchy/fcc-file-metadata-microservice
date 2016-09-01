const express = require('express');
const router  = express.Router();

const multer  = require('multer');
// const limits  = multer({ 
//     limits: { 
//         fieldSize: '5MB' 
//     } 
// });

// multer set-up
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: '5MB'
    },
    onFileUploadStart: file => {
        console.log(`${file.originalname} is uploading...`);
    },
    onFileUploadComplete: file => {
        console.log(`${file.fieldname} is uploaded!`);
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