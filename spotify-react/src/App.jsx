import './App.css';
import { useState, useEffect } from 'react';
// components

import Spotify from './components/Spotify';
import HandsOn from './components/HandsOn';
import Button from './components/Button';

function App() {
  const [token, setToken] = useState(null);

  const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
  const auth_endpoint = import.meta.env.VITE_APP_SPOTIFY_TOKEN_AUTHORIZE;
  const redirect_url = import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI;

  // configure the parameters
  const scope = 'playlist-modify-private';
  const response_type = 'token';

  const loginUrl = `${auth_endpoint}?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scope}`;

  useEffect(() => {
    const hash = window.location.hash;
    let getToken = window.localStorage.getItem('token');

    // getToken()

    if (!getToken && hash) {
      getToken = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', getToken);
    }

    setToken(getToken);
  }, []);

  const onLogin = () => {};
  return (
    <>
      <h1 style={{ color: '#1DB954', marginBottom: '50px' }}>SpotSenja</h1>
      {token ? (
        <Spotify token={token} />
      ) : (
        <a href={loginUrl}>
          <Button text="Login" onClick={onLogin} />
        </a>
      )}
    </>
  );
}

export default App;
