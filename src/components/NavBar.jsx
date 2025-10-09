import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'; 

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Pablos</h1>
        <p className="navbar-subtitulo">Todo lo que buscás en un solo lugar</p>
        <ul className="navbar-menu">
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/category/hombre">Hombre</NavLink></li>
          <li><NavLink to="/category/mujer">Mujer</NavLink></li>
          <li><NavLink to="/category/electronica">Electrónica</NavLink></li>
          <li><NavLink to="/category/joyeria">Joyería</NavLink></li>
        </ul>
      </div>

      <div className="navbar-right">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
