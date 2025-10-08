import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { collection, addDoc, getFirestore, Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim() || !email.trim() || !telefono.trim()) {
      setError('Por favor completá todos los campos');
      return;
    }

    if (cart.length === 0) {
      setError('El carrito está vacío');
      return;
    }

    const order = {
      buyer: { nombre, email, telefono },
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        cantidad: item.cantidad
      })),
      total: totalPrice,
      date: Timestamp.fromDate(new Date())
    };

    try {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al guardar la orden:', error);
      setError('Hubo un problema al guardar la orden. Intentá de nuevo.');
    }
  };

  if (orderId) {
    return (
      <div className="checkout-confirmacion">
        <h2>✅ ¡Gracias por tu compra!</h2>
        <p>Tu código de orden es: <strong>{orderId}</strong></p>
        <Link to="/">
          <button className="volver-inicio">🔁 Volver al inicio</button>
        </Link>
      </div>
    );
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>📝 Finalizar compra</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Confirmar compra</button>
    </form>
  );
}

export default CheckoutForm;
