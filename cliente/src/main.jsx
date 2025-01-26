import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Registrar from './pages/Registrar';
import Alterar from './pages/Alterar';  // Completar a importação aqui

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registro" element={<Registrar />} />
        <Route path="/alterar/:id" element={<Alterar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
