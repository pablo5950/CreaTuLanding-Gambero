import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from './ItemCard';

function ItemListContainer({ mensajeBienvenida }) {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = categoryId
      ? `https://fakestoreapi.com/products/category/${categoryId}`
      : `https://fakestoreapi.com/products`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar productos:', err);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      <h2>{mensajeBienvenida}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="item-list">
          {productos.map(prod => (
            <ItemCard key={prod.id} producto={prod} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
