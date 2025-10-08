import { Link } from 'react-router-dom';

function ItemCard({ producto }) {
  const { id, title, price, image } = producto;

  return (
    <div className="item-card">
      {image ? (
        <img src={image} alt={title} width="150" />
      ) : (
        <p>Imagen no disponible</p>
      )}
      <h3>{title || 'Sin título'}</h3>
      <p>Precio: ${price || 'Consultar'}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
}

export default ItemCard;
