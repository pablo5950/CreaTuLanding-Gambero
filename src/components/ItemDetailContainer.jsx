import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar el producto:', err);
        setLoading(false);
      });
  }, [itemId]);

  const handleAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades de ${producto.title}`);
  };

  if (loading) return <p>Cargando detalle...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail">
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} width="200" />
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.category}</p>
      <p>{producto.description}</p>
      <ItemCount stock={10} onAdd={handleAdd} />
    </div>
  );
}

export default ItemDetailContainer;
