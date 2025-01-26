<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registrar from './pages/Registro'
import Alterar from './pages/Alterar'
import Header from './components/Header';
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Registrar from './pages/Registrar';
import Alterar from './pages/Alterar';  // Completar a importação aqui
>>>>>>> 9758ae60ff2192a9b2f46832a01f757d874abe27

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
