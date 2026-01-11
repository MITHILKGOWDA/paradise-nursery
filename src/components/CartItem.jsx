import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCost = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {cart.length}</p>
      <p>Total Cost: ${totalCost}</p>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Unit Price: ${item.price}</p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: (item.quantity || 1) + 1
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: Math.max((item.quantity || 1) - 1, 1)
                })
              )
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <button>Continue Shopping</button>
      <button>Checkout (Coming Soon)</button>
    </div>
  );
};

export default CartItem;

