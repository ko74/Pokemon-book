import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import ListPage from "./views/PokemonList";
import { DataProvider } from "./context/PokemonContext";

function App() {
  return (
    <Router>
      <DataProvider >
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </div>
      </DataProvider>
    </Router>
  );
}

export default App;
