import { useEffect, useState } from 'react';
import { useDebouncedState } from '@mantine/hooks';
import AllSongs from './AllSongs';
import axios from 'axios';
import useFetch from '../hooks/useFetch';
// import FavoriteSongs from './FavoriteSongs';

const Spotify = ({ token }) => {
  const [searchInput, setsearchInput] = useDebouncedState(null, 800);

  useEffect(() => {
    if (!searchInput) return;

    const searchArtistsId = async () => {
      const artistsId = await axios
        .get(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          // response.data.artists.items[0].id
        });

      // console.log(artistsId);
    };

    searchArtistsId();
  }, [searchInput]);

  return (
    <>
      <div className="search-field">
        <label htmlFor="">Search songs</label>
        <input type="text" onChange={(e) => setsearchInput(e.target.value)} />
      </div>

      <AllSongs />
      {/* <h3>Favorite Songs</h3>
      <FavoriteSongs /> */}
    </>
  );
};

export default Spotify;
