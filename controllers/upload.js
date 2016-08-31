const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const storage = multer.memoryStorage();
const upload  = multer({ storage: storage });

router.post('/', (req, res) => {
    console.log('POST request received! ', req);
    let formattedFileSize = {
        file_size: req.body
    };

    return res.json(formattedFileSize);
});

module.exports = router;