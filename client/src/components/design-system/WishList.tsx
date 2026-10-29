import { useReducer } from "react";

interface Item {
  id: string;
  item: string;
  price: number;
}

interface State {
  wishList: Item[];
  totalBudget: number;
  BudgetLimit: number;
  error: string | null;
}

type Action =
  | { actionType: "addToWishList"; item: Item }
  | { actionType: "removeWishList"; id: string }
  | { actionType: "clearWishList" };

const initialState: State = {
  wishList: [],
  totalBudget: 0,
  BudgetLimit: 500,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.actionType) {
    case "addToWishList": {
      const updatedWishList = [...state.wishList, action.item];

      const total = updatedWishList.reduce((acc, currentItem) => {
        return acc + currentItem.price;
      }, 0);

      return {
        ...state,
        wishList: updatedWishList,
        error: total > state.BudgetLimit ? `🔴 Wishlist exceeds your ₹${state.BudgetLimit} budget` : "",
      };
    }

    case "removeWishList": {
      const updatedWishList = state.wishList.filter((item) => item.id !== action.id);
      const total = updatedWishList.reduce((acc, currentItem) => {
        return acc + currentItem.price;
      }, 0);

      return {
        ...state,
        wishList: updatedWishList,
        error: total <= 0 ? "❌ Pls, Add Atleast one item in the Wish List" : "",
      };
    }

    case "clearWishList":
      return { ...state, wishList: [] };
  }
}

export default function WishList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("from Comp:", state);

  const subTotal = state.wishList.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);

  function handleAddtoWishList(item: Item) {
    dispatch({ actionType: "addToWishList", item: item });
  }

  function handleRemoveFromWishList(id: string) {
    dispatch({ actionType: "removeWishList", id: id });
  }
  function handleClearWishList() {
    dispatch({ actionType: "clearWishList" });
  }

  return (
    <div>
      <div>
        <h2>Add To WishList</h2>

        <button
          className="btn-secondary"
          onClick={() => handleAddtoWishList({ id: crypto.randomUUID(), item: "Camera", price: 200 })}
        >
          Add To WishList | Camera : 200
        </button>
        <button
          className="btn-secondary"
          onClick={() => handleAddtoWishList({ id: crypto.randomUUID(), item: "Phone", price: 200 })}
        >
          Add To WishList | Phone : 200
        </button>
        <button
          className="btn-secondary"
          onClick={() => handleAddtoWishList({ id: crypto.randomUUID(), item: "Drone", price: 150 })}
        >
          Add To WishList | Drone : 150
        </button>
        <button
          className="btn-secondary"
          onClick={() => handleAddtoWishList({ id: crypto.randomUUID(), item: "Laptop", price: 300 })}
        >
          Add To WishList | Laptop
        </button>
      </div>

      <div>
        <h2>WishList</h2>
        {state.error && <h3>{state.error}</h3>}

        {state.wishList.map((item) => (
          <button className="btn-secondary" key={item.id} onClick={() => handleRemoveFromWishList(item.id)}>
            {" "}
            {item.item} | ₹ {item.price} ❌
          </button>
        ))}

        {state.wishList.length > 1 && (
          <button className="btn-secondary" onClick={handleClearWishList}>
            Clear All ❌
          </button>
        )}
      </div>

      <div>
        <h2>Total: ₹{subTotal}</h2>
      </div>
    </div>
  );
}
