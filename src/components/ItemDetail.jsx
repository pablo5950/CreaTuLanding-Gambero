import { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

function ItemDetail({ producto }) {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  const { addItem } = useCart();

  const handleAdd = (cantidad) => {
    setCantidadAgregada(cantidad);
    addItem(producto, cantidad);
  };

  if (!producto) return <p>Producto no disponible</p>;

  const { image, title, description, price, stock } = producto;

  return (
    <div className="item-detail">
      {image ? (
        <img src={image} alt={title} width="200" />
      ) : (
        <p>Imagen no disponible</p>
      )}
      <h2>{title || 'Sin título'}</h2>
      <p>{description || 'Sin descripción'}</p>
      <p>Precio: ${price || 'Consultar'}</p>
      <p>Stock disponible: {stock || 0}</p>

      {cantidadAgregada > 0 ? (
        <p>✅ Producto agregado: {cantidadAgregada} unidad(es)</p>
      ) : (
        <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
}

export default ItemDetail;
