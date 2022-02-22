import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pag1" element={<div>pag1</div>} />
      <Route path="/pag2" element={<div>pag2</div>} />
      <Route path="/pag3" element={<Cart />} />
    </Routes>
  );
};
