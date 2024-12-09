import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (dataUrl, page) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(dataUrl, {
          params: { page },
          CancelToken: source.token,
        });
        if (isMounted) {
          setData((pre) => [...pre, ...res.data]);
          console.log(data);

          setFetchError(null);
        }
      } catch (err) {
        setFetchError(true);
        setData([]);
      } finally {
        isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };
    fetchData();

    const cleanUp = () => {
      source.cancel();
      isMounted = false;
    };
    return cleanUp;
    
  }, [dataUrl, page]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
