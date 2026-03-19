import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Pokedex from "./Pokedex";
import Home from "./Home";
import "./App.css";
import Search from "./Search";
import Pokemon from "./Pokemon";

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pokedex">Pokédex</Link>
      <Link to="/search">Search</Link>
    </nav>
  )
};

const App = () => (
  <BrowserRouter>
    <NavigationBar />
    <div className="content">
      <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/pokedex" element={<Pokedex />}
          >Pokédex</Route>
          <Route path="/search" element={<Search />}
          >Search</Route>
          <Route path="/pokemon" element={<Pokemon />}>Pokémon</Route>
        </Routes>
      </div>
  </BrowserRouter>
);

export default App;