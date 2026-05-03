import { useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../store/CartSlice.jsx";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-thumb" />
      <div className="cart-details">
        <h4>{item.name}</h4>
        <p>Unit cost: ${item.price.toFixed(2)}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="cart-actions">
        <button onClick={() => dispatch(decrement(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increment(item.id))}>+</button>
        <button
          className="danger-btn"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
