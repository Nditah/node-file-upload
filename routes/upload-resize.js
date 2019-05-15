/**
 * First, inside the router.post request,
 * we have defined the upload folder and
 * then pass that folder to the constructor of Resize class.
 * It will return the object and
 * then we call the save() method on that object and
 * pass the image buffer as an argument to the save() function and
 * return the file name and we are for now just displaying
 * the filename in JSON format to the User.
 */

const express = require('express');
const path = require('path');
const upload = require('../middlewares/upload');
const Resize = require('../middlewares/resize');

const router = express.Router();

router.get('/upload-resize', async function (req, res) {
  await res.render('upload-resize');
});


router.post('/upload-resize', upload.single('image'), async function (req, res) {
  await console.log('post upload-resize');
  const DIR = path.join(__dirname, '../uploads/images');
  const fileUpload = new Resize(DIR);
  if (!req.file) {
    res.status(401).json({error: 'Please provide an image'});
  }
  const filename = await fileUpload.save(req.file.buffer);
  return res.status(200).json({ name: filename });
});


module.exports = router;
