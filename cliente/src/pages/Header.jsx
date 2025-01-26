import { Link } from 'react-router-dom'; 

export default function Header() {
  return (
    <header>
      <h1>Loja de Arranjos</h1>
      <nav>
        <ul>
          <li>
            <Link to="/filtros?nome=flor">Filtrar por Flor</Link>
          </li>
          <li>
            <Link to="/filtros?tipo=primavera">Filtrar por Primavera</Link>
          </li>
          <li>
            <Link to="/filtros?precoMin=50&precoMax=200">Filtrar por Preço (50 a 200)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
