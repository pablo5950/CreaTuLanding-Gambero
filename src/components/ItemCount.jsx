import { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const sumar = () => count < stock && setCount(count + 1);
  const restar = () => count > 1 && setCount(count - 1);

  return (
    <div>
      <button onClick={restar}>-</button>
      <span>{count}</span>
      <button onClick={sumar}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
