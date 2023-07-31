import { useEffect, useState } from 'react';
import { useDebouncedState } from '@mantine/hooks';
import AllSongs from './AllSongs';
import axios from 'axios';
import useFetch from '../../utils/useFetch';
// import FavoriteSongs from './FavoriteSongs';

const Spotify = () => {
  const [searchInput, setsearchInput] = useDebouncedState(null, 800);

  const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
  const token_endpoint = import.meta.env.VITE_APP_SPOTIFY_TOKEN_ENDPOINT;

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  };

  const { data, loading, error } = useFetch('post', token_endpoint, config.body, config.headers);
  console.log(data);

  useEffect(() => {
    if (!searchInput) return;

    const searchArtistsId = async () => {
      const artistsId = await axios
        .get(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.access_token}`,
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
      <h1 style={{ color: '#1DB954' }}>SpotSenja</h1>
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
