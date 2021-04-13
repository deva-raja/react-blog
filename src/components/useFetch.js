import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error('Invalid data entry, Please Try Again....');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === 'AbortError') {
            console.log('abort error');
          }
          setLoading(false);
          setError(error.message);
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { error, loading, data };
}

export default useFetch;
