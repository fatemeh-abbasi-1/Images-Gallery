import { createContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [page, setPage] = useState(2);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const fetchImage = async function () {
    setLoading(true);
    let newItems = [];
    newItems = items;
    try {
      const respanse = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      newItems.push(...respanse.data);
      console.log(newItems);
      setItems(newItems);
      setLoading(false);
    } catch {
      setFetchError(true);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 < window.scrollY + window.innerHeight &&
      page <= 9
    ) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    fetchImage();
  }, [page]);

  window.addEventListener("scroll", handleScroll);

  return (
    <DataContext.Provider value={{ items, loading, fetchError }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
