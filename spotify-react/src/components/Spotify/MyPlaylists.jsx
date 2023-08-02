import React from "react";
import Card from "./Card";

import "./songs.css";

const MyPlaylists = ({ playlists = [] }) => {
  return (
    <div className="container">
      {playlists.map((album, index) => {
        return (
          <div key={index}>
            <Card album={album} />
          </div>
        );
      })}
    </div>
  );
};

export default MyPlaylists;
