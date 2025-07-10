import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Imoveis from './pages/Imoveis';
import Clientes from './pages/Clientes';
import { Header } from './componentes/Header';


function App () {
  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/imoveis" element={<Imoveis />} />
      </Routes>
    </>
  )
}

export default App
