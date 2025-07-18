import { Link } from 'react-router-dom'
import lupa from '../assets/buscar.svg'

export default function Clientes () {
  return (
    <>
      <h1>Clientes</h1>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="col-md-6 col-lg-4 p-0">
          <div className='input-group'>
            <input
              type="text"
              className='form-control'
              placeholder='Pesquise pela pessoa'
              aria-label="Nome do cliente"
              aria-describedby='adicionar'
            />
            <button
              className='btn btn-outline-secondary'
              type="button"
              id="adicionar"
            >
              <img src={lupa} width={20} alt="lupa" />
            </button>
          </div>
        </div>
        <Link to={'/cadastrar-cliente'}>
          <button className="btn btn-orange">
            Cadastrar Cliente
          </button>
        </Link>
      </div>
    </>
  )
}