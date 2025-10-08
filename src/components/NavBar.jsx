import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'; 

function NavBar() {
  return (
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <h1>Pablos</h1>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
          Todo lo que buscás en un solo lugar
        </p>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/category/hombre">Hombre</NavLink></li>
          <li><NavLink to="/category/mujer">Mujer</NavLink></li>
          <li><NavLink to="/category/electronica">Electrónica</NavLink></li>
          <li><NavLink to="/category/joyeria">Joyería</NavLink></li>
        </ul>
      </div>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
