import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
