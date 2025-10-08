import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, 'productos', id); 

    getDoc(docRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log('Producto no encontrado');
          setProducto(null);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar el producto:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Cargando detalle...</p>
      ) : producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
