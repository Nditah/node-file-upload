const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();
const DIR = path.join(__dirname, '../uploads/images');


const storage = multer.diskStorage({
	destination:function(req, file, cb){
		cb(null, DIR);
	},
	filename: function(req, file, cb){
		// cb(null, file.originalname);
		cb(null, Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({ storage: storage }).any();


router.get('/upload-multiple', async function (req, res) {
  await res.render('upload-multiple');
});

//our file upload function.
router.post('/upload-multiple', upload, function (req, res, next) {
  const uploadedFiles = req.files;
	return res.send(uploadedFiles);   
})

module.exports = router;