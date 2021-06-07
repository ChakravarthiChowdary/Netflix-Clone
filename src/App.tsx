import React from "react";
import "./App.css";

import Banner from "./components/Banner";
import MovieCategory from "./components/MovieCategory";
import NavBar from "./components/NavBar";
import { categories } from "./utils/categories";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {categories.map((category) => (
        <MovieCategory
          title={category.title}
          fetchURL={category.fetchURL}
          key={category.title}
          largeImage={category.title === "Netflix Originals"}
        />
      ))}
    </div>
  );
}

export default App;
