import React from 'react';
import AllSongs from './AllSongs';
import FavoriteSongs from './FavoriteSongs';

const Spotify = () => {
  return (
    <>
      <h1 style={{ color: '#1DB954' }}>SpotSenja</h1>
      <div className="search-field">
        <label htmlFor="">Search songs</label>
        <input type="text" />
      </div>

      <AllSongs />
      {/* <h3>Favorite Songs</h3>
      <FavoriteSongs /> */}
    </>
  );
};

export default Spotify;
