import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Clients } from "../pages/Clients";
import { Home } from "../pages/Home";
import React from "react";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  </BrowserRouter>
);

export default App;
