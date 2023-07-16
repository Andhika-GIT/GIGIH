import { v4 as uuid } from "uuid";

import songs from "../repositories/songs.json" assert { type: "json" };

export const getAllPlaylists = () => songs;

export const getPlaylistById = (id) => {
  const song = songs.find((song) => song.id === id);

  return song;
};

export const addPlaylist = (title, artists, url) => {
  const newSong = {
    id: uuid(),
    title,
    artists,
    url,
  };

  songs.push(newSong);

  return newSong;
};
