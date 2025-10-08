import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        🛒
        {totalItems > 0 && (
          <span style={{
            position: 'absolute',
            top: -7,
            right: -12,
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px'
          }}>
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
