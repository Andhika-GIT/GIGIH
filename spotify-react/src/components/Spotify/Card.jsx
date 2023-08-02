import React from "react";

const Card = ({ album = "test" }) => {
  return (
    <div className="card">
      <img src={album.images[0].url} alt="" className="avatar" />
      <div className="card-content">
        <h1>{album.name}</h1>
        {/* <p>by {album.artists[0].name}</p> */}
      </div>
    </div>
  );
};

export default Card;
