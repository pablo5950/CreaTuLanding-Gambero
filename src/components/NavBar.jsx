import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Pablos</h1>
      <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
        Todo lo que buscás en un solo lugar
      </p>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/category/men's clothing">Hombre</NavLink></li>
        <li><NavLink to="/category/women's clothing">Mujer</NavLink></li>
        <li><NavLink to="/category/electronics">Electrónica</NavLink></li>
        <li><NavLink to="/category/jewelery">Joyería</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
