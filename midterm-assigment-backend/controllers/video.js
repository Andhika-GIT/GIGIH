import Video from "../models/video.js";

export const getAllVideo = async (req, res) => {
  try {
    const videos = await Video.find();

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        results: videos.length,
        data: videos,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
