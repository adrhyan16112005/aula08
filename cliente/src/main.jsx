import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Registrar from './pages/Registro';
import Alterar from './pages/Alterar';
import Header from './components/Header';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registro" element={<Registrar />} />
        <Route path="/alterar/:id" element={<Alterar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
