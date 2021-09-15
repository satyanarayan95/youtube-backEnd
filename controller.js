const YTModel = require("./model");

exports.addVideo = async function (req, res) {
  try {
    const videoData = req.body;
    const createdVideo = await new YTModel(videoData);
    await createdVideo.save();
    res.json(createdVideo);
  } catch (err) {
    res.status(400).json({
      message: "video didnt save",
      err,
    });
  }
};

exports.getVideos = async function (req, res) {
  try {
    const videoData = await YTModel.find({});
    res.json(videoData);
  } catch (error) {
    res.status(400).json({
      message: "error in getting video data",
      error,
    });
  }
};
exports.getVideoByTitle = async function (req, res) {
  try {
    const { title } = req.params;

    const videoData = await YTModel.find({});
    const filteredRes = videoData.filter((video)=>video.title.toLowerCase().includes(title.toLowerCase()))
    console.log(filteredRes);
    res.json(filteredRes);
  } catch (error) {
    res.status(400).json({
      message: "error in getting video data",
      error,
    });
  }
};
