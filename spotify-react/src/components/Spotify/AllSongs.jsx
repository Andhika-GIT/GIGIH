import React from 'react';
import Card from './Card';

import './songs.css';

const AllSongs = ({ albums = [] }) => {
  // const totalSong = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container">
      {albums.map((album, index) => {
        return (
          <div key={index}>
            <Card album={album} />
          </div>
        );
      })}
    </div>
  );
};

export default AllSongs;
