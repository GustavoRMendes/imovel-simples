import { Link } from 'react-router-dom';

export default function NavBar () {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/">Início</Link> |{' '}
      <Link to="/clientes">Clientes</Link> |{' '}
      <Link to="/imoveis">Imoveis</Link>
    </nav>
  );
}