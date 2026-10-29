import { useReducer } from "react";

interface Item {
  id: number;
  item: string;
  price: number;
}

interface State {
  items: Item[];
  discount: number;
  coupon: string | null;
  error: string | null;
}

type Action = { type: "add"; item: Item } | { type: "applyDiscount"; coupon: string };

const initialState: State = {
  items: [],
  discount: 0,
  coupon: null,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [...state.items, action.item],
        error: null,
      };

    case "applyDiscount":
      if (action.coupon === "DISC10") {
        return {
          ...state,
          discount: 10,
          coupon: action.coupon,
          error: null,
        };
      }

      return {
        ...state,
        error: "Invalid coupon code.",
      };

    default:
      return state;
  }
}

export default function CartTest() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAddToCart(item: Item) {
    dispatch({ type: "add", item });
  }

  function handleDiscount() {
    dispatch({
      type: "applyDiscount",
      coupon: "DISC10",
    });
  }

  const subtotal = state.items.reduce((total, item) => total + item.price, 0);

  const discountAmount = (subtotal * state.discount) / 100;
  const finalTotal = subtotal - discountAmount;

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button
        onClick={() =>
          handleAddToCart({
            id: 1,
            item: "Camera",
            price: 200,
          })
        }
      >
        Add Camera — ₹200
      </button>

      <button
        onClick={() =>
          handleAddToCart({
            id: 2,
            item: "Laptop",
            price: 100,
          })
        }
      >
        Add Laptop — ₹100
      </button>

      <button
        onClick={() =>
          handleAddToCart({
            id: 3,
            item: "Phone",
            price: 300,
          })
        }
      >
        Add Phone — ₹300
      </button>

      <button
        onClick={() =>
          handleAddToCart({
            id: 4,
            item: "Drone",
            price: 50,
          })
        }
      >
        Add Drone — ₹50
      </button>

      <h3>Cart Items</h3>

      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.item} — ₹{item.price}
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleDiscount}>Apply DISC10 Coupon</button>

      {state.coupon && <p>Applied coupon: {state.coupon}</p>}

      {state.error && <p role="alert">{state.error}</p>}

      <hr />

      <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
      <p>Discount: {state.discount}%</p>
      <p>Discount amount: ₹{discountAmount.toFixed(2)}</p>

      <h3>Final Total: ₹{finalTotal.toFixed(2)}</h3>
    </div>
  );
}

function calculateTotal(items: Item[], discount: number): number {
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const discountAmount = (subtotal * discount) / 100;
  return subtotal - discountAmount;
}
