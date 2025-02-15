import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClientsSelected } from "../pages/ClientsSelected";
import { Clients } from "../pages/Clients";
import { Home } from "../pages/Home";
import React from "react";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients-selected" element={<ClientsSelected />} />
    </Routes>
  </BrowserRouter>
);

export default App;
