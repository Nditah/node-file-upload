require('dotenv').config();
const express = require('express');
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
    
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "demo",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const upload = multer({ storage: storage }).single('image');

router.get('/upload-cloudinary', async function (req, res) {
    await res.render('upload-cloudinary');
  });

router.post('/upload-cloudinary', upload, function (req, res) {
    console.log(req.file) // to see what is returned to you
    const image = {};
    // URL which can be used to display the image on the front-end
    // public_id which will allow you to access and delete the image from Cloudinary.
    image.url = req.file.url;
    image.id = req.file.public_id;
  
    return res.json(image);
    
    Image.create(image) // save image information in database
      .then(newImage => res.json(newImage))
      .catch(err => console.log(err));
    
});

module.exports = router;
