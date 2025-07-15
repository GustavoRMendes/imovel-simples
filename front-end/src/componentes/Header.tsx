import logo from '../assets/logo.svg'
import imovel from '../assets/imovel.svg'
import cliente from '../assets/clientes.svg'
import { NavLink } from 'react-router-dom';

export function Header () {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" width={220} />
        <hr className="border-color" />
        <div className='text-center'>
          <h3 className='p mb-4 mt-4'>Olá Família Valente! Bem-Vindo(a) ao Imóvel Simples!</h3>
          <div className="d-flex justify-content-center gap-3 mb-5 ">
            <NavLink to="/imoveis" className="text-white no-underline">
              <button className="btn btn-dark d-flex align-items-center gap-1">
                <img src={imovel} alt="botao-imovel" />
                <span>Imóveis</span>
              </button>
            </NavLink>
            <NavLink to="/clientes" className="text-white no-underline ">
              <button className="btn btn-dark d-flex align-items-center gap-1">
                <img src={cliente} alt="botao-cliente" />
                <span>Clientes</span>
              </button>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  )
}