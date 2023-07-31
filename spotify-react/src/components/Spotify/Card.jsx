import './songs.css';
import React from 'react';

const Card = ({ totalSong }) => {
  return (
    <div className="container">
      {totalSong.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={`https://picsum.photos/id/${index + 10}/200`} alt="" className="avatar" />
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

export default Card;
