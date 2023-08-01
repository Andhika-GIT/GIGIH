import { useEffect, useState } from 'react';
import { useDebouncedState } from '@mantine/hooks';
import AllSongs from './AllSongs';
import axios from 'axios';
import useFetch from '../hooks/useFetch';
// import FavoriteSongs from './FavoriteSongs';

const Spotify = ({ token }) => {
  const [searchInput, setsearchInput] = useDebouncedState(null, 500);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (!searchInput) return;

    // get the artists id based on search
    const searchArtistsId = async () => {
      const artistsId = await axios
        .get(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          return response.data.artists.items[0].id;
        });

      // console.log(artistsId);

      // get the albums list based on artists id
      const albums = await axios(`https://api.spotify.com/v1/artists/${artistsId}/albums?include_groups=album&limit=8`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        console.log(response.data.items);
        setAlbums(response.data.items);
      });
    };

    searchArtistsId();
  }, [searchInput]);

  return (
    <>
      <div className="search-field">
        <label htmlFor="">Search songs</label>
        <input type="text" onChange={(e) => setsearchInput(e.target.value)} />
      </div>

      <AllSongs albums={albums} />
      {/* <h3>Favorite Songs</h3>
      <FavoriteSongs /> */}
    </>
  );
};

export default Spotify;
