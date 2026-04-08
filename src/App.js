import React from "react";
import './App.css';
import Home from './pages/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import PricePage from "./pages/PricePage/PricePage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
