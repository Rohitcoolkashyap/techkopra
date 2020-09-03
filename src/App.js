import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import SearchBar from "./components/main/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SearchBar />
    </div>
  );
}

export default App;
