import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import ItemCard from './ItemCard';

function ItemListContainer({ mensajeBienvenida }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, 'productos');

    getDocs(productosRef)
      .then(snapshot => {
        const productosFirebase = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const filtrados = categoryId
          ? productosFirebase.filter(prod =>
              prod.category &&
              prod.category.toLowerCase() === categoryId.toLowerCase()
            )
          : productosFirebase;

        setProductos(filtrados);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
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
          {productos.length === 0 ? (
            <p>No hay productos en esta categoría.</p>
          ) : (
            productos.map(prod => (
              <ItemCard key={prod.id} producto={prod} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
