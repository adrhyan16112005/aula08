import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registrar from './pages/Registro'
import Alterar from './pages/Alterar'
import Cadastrar from './pages/Cadastrar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/registro" element={<Registrar/>}/>
            <Route path="/alterar" element={<Alterar/>}/>
            <Route path="/cadastrar" element={<Cadastrar/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
