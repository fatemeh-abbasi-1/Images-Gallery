import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const { isLoading, fetchError, data } = useAxiosFetch(
    `https://picsum.photos/v2/list?page=${page}&limit=10`,
    page
  );

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight &&
      page <= 6
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <DataContext.Provider value={{ data, isLoading, fetchError }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
