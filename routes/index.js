const express = require('express');

const homeRouter = require('./home');
const uploadMulterRouter = require('./upload-multer');
const uploadResizeRouter = require('./upload-resize');
const uploadMultipleRouter = require('./upload-multiple');
const uploadCloudinaryRouter = require('./upload-cloudinary');

const router = express.Router();

router.use(homeRouter);
router.use(uploadMulterRouter);
router.use(uploadResizeRouter);
router.use(uploadMultipleRouter);
router.use(uploadCloudinaryRouter);

module.exports = router;
