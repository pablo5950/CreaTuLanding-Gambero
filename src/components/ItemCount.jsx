import { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);
  const [agregado, setAgregado] = useState(false); 

  const sumar = () => {
    if (count < stock) setCount(prev => prev + 1);
  };

  const restar = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  const agregarAlCarrito = () => {
    if (stock > 0 && count <= stock) {
      onAdd(count);
      setAgregado(true); 
    }
  };

  return (
    <div className="item-count">
      {stock === 0 ? (
        <p>❌ Producto sin stock</p>
      ) : agregado ? (
        <p>✅ Producto agregado al carrito</p>
      ) : (
        <>
          <div className="contador" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={restar}
              disabled={count <= 1}
              className="btn-principal"
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={sumar}
              disabled={count >= stock}
              className="btn-principal"
            >
              +
            </button>
          </div>
          <button
            onClick={agregarAlCarrito}
            className="btn-principal"
            disabled={stock === 0}
            style={{ marginTop: '1rem' }}
          >
            Agregar al carrito
          </button>
        </>
      )}
    </div>
  );
}

export default ItemCount;
