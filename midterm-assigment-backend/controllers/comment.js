import Comment from "../models/comment";

export const getAllComment = async (req, res) => {
  try {
    const { videoId } = req.params;

    const comments = await Comment.find({ videoId: videoId.toString() }).select(
      "username comment createdAt"
    );

    if (!comments) {
      return res.status(404).json({
        message: "products by the video id are not found",
      });
    }

    res
      .status(200)
      // send the json format data into client
      .json({
        status: "success",
        results: comments.length,
        data: comments,
      });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
