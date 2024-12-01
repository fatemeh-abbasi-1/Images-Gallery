import React from "react";
import { useEffect, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import axios from "axios";

function App() {
  const [page, setPage] = useState(2);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImage = async function () {
    setLoading(true);
    const respanse = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );

    setItems([...items, ...respanse.data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 <
      window.scrollY + window.innerHeight && page < 3
    ) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    fetchImage();
  }, [page]);


  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App">
      <Header></Header>
      <Content items={items} loading={loading}></Content>
    </div>
  );
}

export default App;
