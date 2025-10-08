import { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) setCount(prev => prev + 1);
  };

  const restar = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  const agregarAlCarrito = () => {
    if (stock > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      {stock === 0 ? (
        <p>❌ Producto sin stock</p>
      ) : (
        <>
          <div className="contador">
            <button onClick={restar} disabled={count <= 1}>-</button>
            <span>{count}</span>
            <button onClick={sumar} disabled={count >= stock}>+</button>
          </div>
          <button
            onClick={agregarAlCarrito}
            className="btn-agregar"
            disabled={stock === 0}
          >
            Agregar al carrito
          </button>
        </>
      )}
    </div>
  );
}

export default ItemCount;
