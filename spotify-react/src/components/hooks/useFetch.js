import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (method, url, body, headers) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading('loading...');
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios({
      method: method ? method : 'get',
      url: url,
      data: body && body,
      headers: headers && headers,
    })
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res.data && setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError('An error occurred. Awkward..');
      });
    return () => {
      source.cancel();
    };
  }, []);

  return { data, loading, error };
};

export default useFetch;
