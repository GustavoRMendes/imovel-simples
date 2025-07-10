import logo from '../assets/logo.svg'
import divisor from '../assets/divisor.svg'

export function Header () {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
        <img src={divisor} alt="Divisor" />
        <p>Olá Família Valente! Bem-Vindo(a) ao Imóvel Simples!</p>
      </header>

    </>
  )
}