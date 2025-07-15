import lupa from '../assets/buscar.svg'
export default function Clientes () {
  return (
    <>
      <h1>Clientes</h1>
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className='input-group mb-3'>
            <input type="text" className='form-control' placeholder='Digite o nome' aria-label="Nome do cliente" aria-describedby='adicionar' />
            <button className='btn btn-outline-secondary' type="button" id="adicionar"><img src={lupa} width={20} alt="lupa" /></button>
          </div>
        </div>
      </div>
    </>
  )
}

// d-flex align-items-center gap-3