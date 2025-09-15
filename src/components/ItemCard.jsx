import { Link } from 'react-router-dom';

function ItemCard({ producto }) {
  return (
    <div className="item-card">
      <img src={producto.image} alt={producto.title} width="150" />
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <Link to={`/item/${producto.id}`}>Ver detalle</Link>
    </div>
  );
}

export default ItemCard;
