const express = require('express');
const { getVideos, addVideo, getVideoByTitle } = require('./controller');
const router = express.Router();

router.get("/videos",getVideos)
router.get("/video/:title",getVideoByTitle)
router.post("/video",addVideo)

module.exports =router;