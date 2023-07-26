import React from "react";
import "./songs.css";

const FavoriteSongs = () => {
  const songsLoop = [1, 2, 3];
  return (
    <div className="container">
      {songsLoop.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img
              src={`https://picsum.photos/id/${index + 20}/200`}
              alt=""
              className="avatar"
            />
            <div className="card-content">
              <h1>song number {index + 1}</h1>
              <p>this is a description for song number {index + 1}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteSongs;
