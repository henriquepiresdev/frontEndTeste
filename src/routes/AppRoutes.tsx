import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Clients } from "../pages/Clients";
import { Home } from "../pages/Home";
import React from "react";
import { ClientsSelected } from "../pages/ClientsSelected";

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
