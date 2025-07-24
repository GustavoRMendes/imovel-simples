import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Sidebar from './componentes/Sidebar.tsx';
import { Routes, Route } from 'react-router-dom';
import Imoveis from './pages/Imoveis';
import Clientes from './pages/Clientes';
import Home from './pages/Home.tsx';
import CadastrarCliente from './pages/CadastrarCliente.tsx';
import CadastrarImovel from './pages/CadastrarImovel.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div className="p-4 flex-grow-1">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/imoveis" element={<Imoveis />} />
            <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
            <Route path="/cadastrar-imovel" element={<CadastrarImovel />} />
          </Routes>
        </div>
      </div>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
