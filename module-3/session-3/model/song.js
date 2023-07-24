const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  artist: {
    required: true,
    type: String,
  },
  played: {
    required: true,
    type: Number,
  },
});

const Song = (module.exports = mongoose.model("Song", songSchema));
