
const CartWidget = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      🛒
      <span style={{
        position: 'absolute',
        top: -7,
        right: -12,
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px'
      }}>
        3
      </span>
    </div>
  );
};

export default CartWidget;
