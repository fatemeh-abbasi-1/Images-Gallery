import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const res = await axios.get(url, {
          CancelToken: source.token,
        });
        if (isMounted) {
          setData(res.data);
          setFetchError(null);
        }
      } catch (err) {
        setFetchError(true);
        setData([]);
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };
    fetchData(dataUrl);

    const cleanUp = () => {
      source.cancel();
      isMounted = false;
    };
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;