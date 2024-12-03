import React from "react";
import Content from "./Content";
import Header from "./Header";
import { DataProvider } from "./context/DataCantext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header></Header>
        <Content></Content>
      </DataProvider>
    </div>
  );
}

export default App;
