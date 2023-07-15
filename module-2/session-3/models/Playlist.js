import { v4 as uuid } from "uuid";

import songs from "../repositories/songs.json" assert { type: "json" };

export const getAllPlaylists = () => songs;

export const getPlaylistById = (id) => {
  const song = songs.find((song) => song.id === id);

  return song;
};

export const addPlaylist = (name, artists) => {};
