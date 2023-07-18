import { v4 as uuid } from "uuid";

import songs from "../repositories/songs.json" assert { type: "json" };

export const getAllPlaylists = () => songs;

export const getMostPlayedPlaylist = () => {
  const sortedSongs = songs.sort((a, b) => {
    if (a.playCount > b.playCount) {
      return a > b ? 1 : -1;
    }
  });

  return sortedSongs;
};

export const getPlaylistByTitle = (title) => {
  const song = songs.filter((song) => song.title.toLowerCase().includes(title));

  return song;
};

export const playPlaylistByTitle = (title) => {
  const song = songs.filter((song) => song.title.toLowerCase().includes(title));

  // increate the played property
  songs.map((currentSong) => {
    if (currentSong.id === song.id) {
      currentSong.played++;
    }
  });

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
