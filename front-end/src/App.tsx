import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import logo from './assets/logo.svg'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Imoveis from './pages/Imoveis';
import Clientes from './pages/Clientes';
import Navegacao from './componentes/Navegacao';

function App () {


  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
      </header>

      <Navegacao />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/imoveis" element={<Imoveis />} />
      </Routes>

    </>
  )
}

export default App
