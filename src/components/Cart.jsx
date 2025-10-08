import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeItem, clearCart, totalItems, totalPrice } = useCart();

  if (!cart || cart.length === 0) {
    return <p>🛒 El carrito está vacío</p>;
  }

  return (
    <div className="cart">
      <h2>🛍️ Tu carrito</h2>

      <ul>
        {cart.map((item) => {
          const { id, title, image, price, cantidad } = item;

          return (
            <li key={id} className="cart-item">
              {image ? (
                <img src={image} alt={title} width="80" />
              ) : (
                <p>Imagen no disponible</p>
              )}
              <div>
                <h3>{title || 'Sin título'}</h3>
                <p>Cantidad: {cantidad || 0}</p>
                <p>Precio unitario: ${price || 'Consultar'}</p>
                <p>Subtotal: ${price && cantidad ? price * cantidad : 0}</p>
                <button onClick={() => removeItem(id)}>Eliminar</button>
              </div>
            </li>
          );
        })}
      </ul>

      <hr />
      <p>Total de productos: {totalItems || 0}</p>
      <p>Total a pagar: ${totalPrice || 0}</p>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button onClick={clearCart}>Vaciar carrito</button>

        <Link to="/checkout">
          <button className="finalizar-compra">
            📝 Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
