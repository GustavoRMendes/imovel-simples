import logo from '../assets/logo.svg'
import imovel from '../assets/imovel.svg'
import cliente from '../assets/clientes.svg'

export function Header () {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
        <hr className="border opacity-75" />
        <div className='text-center'>
          <p>Olá Família Valente! Bem-Vindo(a) ao Imóvel Simples!</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-dark">
              <img src={imovel} alt="botao-imovel" /> Imóveis
            </button>
            <button className="btn btn-dark">
              <img src={cliente} alt="botao-cliente" /> Clientes
            </button>
          </div>
        </div>
      </header>

    </>
  )
}