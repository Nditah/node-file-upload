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

const upload = multer({ storage: storage }).single('image');
//define the type of upload multer would be doing and pass in its destination,
// in the case commented-out below, its a single file with the name photo
// const upload = multer({dest: DIR}).single('image');


router.get('/upload-multer', async function (req, res) {
  await res.render('upload-multer');
});

router.post('/upload-multer', function (req, res, next) {
     upload(req, res, function (err) {
        if (err) {
          return res.status(422).send("an Error occured" + err.message)
        }  
        const uri = req.file.path;
        return res.send("Upload Completed for " + uri); 
  });     
})

module.exports = router;