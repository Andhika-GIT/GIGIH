import useFetch from '../components/hooks/useFetch';
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

export { data, loading, error };
