import React from "react";
import AllSongs from "./AllSongs";
import FavoriteSongs from "./FavoriteSongs";

const Spotify = () => {
  return (
    <>
      <h1 style={{ color: "#1DB954" }}>SpotSenja</h1>
      <h3>All Songs</h3>
      <AllSongs />
      <h3>Favorite Songs</h3>
      <FavoriteSongs />
    </>
  );
};

export default Spotify;
