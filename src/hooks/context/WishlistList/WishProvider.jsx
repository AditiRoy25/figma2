import { useEffect, useReducer } from "react";
import WishContext from "./CreateWishContex";
import api from "../../../Api/Api";

const initialState = {
  wish: [],
  loading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "set_wish":
      return { ...state, wish: action.payload, loading: false };

    case "add_to_wish":
      return { ...state, wish: [...state.wish, action.payload] };

    case "remove_wish":
      return {
        ...state,
        wish: state.wish.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}

export const WishProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/wishlist");
        dispatch({ type: "set_wish", payload: response.data || [] });
      } catch (error) {
        console.error("Error fetching wishlist", error);
      }
    };
    fetchData();
  }, []);

 
 const addtoWish = async (productId) => {
  try {
    const response = await api.post("/wishlist", { productId });
    dispatch({ type: "add_to_wish", payload: response.data });
  } catch (error) {
    console.error("Error adding to wishlist", error);
  }
};


  
  const removeWish = async (productId) => {
    try {
      await api.delete(`/wishlist/${productId}`);
      dispatch({ type: "remove_wish", payload: productId });
    } catch (error) {
      console.error("Error removing from wishlist", error);
    }
  };

  return (
    <WishContext.Provider
      value={{
        wish: state.wish,
        wishCount: state.wish.length, 
        addtoWish,
        removeWish,
        loading: state.loading,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};
