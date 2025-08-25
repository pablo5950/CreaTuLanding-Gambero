
import CartWidget from './CartWidget'; //Llamado a CartWidget desde NavBar como dijo el profe

const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#0077b6',
      color: 'white',
      borderBottom: '1px solid #ddd'
    }}>
      <h1 style={{ margin: 0 }}>Pablo´s - Indumentaria premium</h1>
      
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', margin: 0 }}>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Remeras</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Zapatillas</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Camperas</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Short de baño</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Accesorios</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
