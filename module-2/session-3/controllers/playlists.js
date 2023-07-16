import {
  getAllPlaylists,
  getPlaylistById,
  addPlaylist,
} from "../models/playlists";

export const getAll = (req, res) => {
  try {
    const songs = getAllPlaylists();

    res.json({
      data: songs,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getDetail = (req, res) => {
  const { id } = req.params;

  const song = getPlaylistById(id);

  if (!song) {
    return res.status(404).json({
      message: "Song not found",
    });
  }

  res.json({
    data: song,
  });
};

export const addNew = (req, res) => {
  try {
    const { title, artists, url } = req.body;

    const song = addPlaylist(title, artists, url);

    if (!song) {
      return res.status(404).json({
        message: "song not found",
      });
    }

    res.json({
      data: song,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
