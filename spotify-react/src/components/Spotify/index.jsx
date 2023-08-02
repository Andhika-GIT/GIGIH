import { useEffect, useState } from "react";
import { useDebouncedState } from "@mantine/hooks";
import axios from "axios";
import useFetch from "../hooks/useFetch";

// components
import AllSongs from "./AllSongs";
import MyPlaylists from "./MyPlaylists";
// import FavoriteSongs from './FavoriteSongs';

const Spotify = ({ token }) => {
  const [searchInput, setsearchInput] = useDebouncedState(null, 500);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getUserPlaylist = async () => {
      // get user id
      const userId = await axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.id);
          return response.data.id;
        });

      const playlistResults = await axios
        .get(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setPlaylists(response.data.items);
        });
    };

    getUserPlaylist();
  }, []);

  useEffect(() => {
    if (!searchInput) return;

    // get the artists id based on search
    const searchArtistsId = async () => {
      const artistsId = await axios
        .get(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          return response.data.artists.items[0].id;
        });

      // console.log(artistsId);

      // get the albums list based on artists id
      const albums = await axios(
        `https://api.spotify.com/v1/artists/${artistsId}/albums?include_groups=album&limit=8`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((response) => {
        console.log(response.data.items);
        setAlbums(response.data.items);
      });
    };

    searchArtistsId();
  }, [searchInput]);

  return (
    <>
      {/* <div className="search-field">
        <label htmlFor="">Search songs</label>
        <input type="text" onChange={(e) => setsearchInput(e.target.value)} />
      </div> */}

      {/* <AllSongs albums={albums} /> */}
      <h2>My Playlist</h2>
      <MyPlaylists playlists={playlists} />
    </>
  );
};

export default Spotify;
