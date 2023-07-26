import React from "react";
import "./songs.css";

import allSongs from "../../utils/songs";

const AllSongs = () => {
  return (
    <>
      <h2>All Songs</h2>
      <div className="card-container">
        {allSongs.map((song, index) => {
          return (
            <div className="card" key={index}>
              <img
                src="https://picsum.photos/200?grayscale"
                alt=""
                className="avatar"
              />
              <div className="card-content">
                <h1>song number {index + 1}</h1>
                <p>this is description for song number {index + 1}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllSongs;
