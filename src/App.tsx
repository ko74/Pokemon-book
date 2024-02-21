import React from "react";
import LandingPage from "./views/LandingPage";
import ListPage from "./views/PokemonList";
import { DataProvider } from "./context/PokemonContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
