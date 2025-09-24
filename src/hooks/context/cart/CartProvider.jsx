import { useEffect, useReducer } from "react";
import CartContext from "./CreatecartContext";
import api from "../../../Api/Api";
import { toast } from "sonner";

const initialState = {
  cart: [],
  loading: true,
};
function reducer(state, action) {
  switch (action.type) {
    case "set_cart":
      return { ...state, cart: action.payload, loading: false };

    case "add_to_cart":
      return { ...state, cart:[...state.cart,action.payload]  };;

    case "remove_cart":
      return{...state, cart:state.cart.filter((item)=>item.id!==action.payload)};

    default:
      return state;
  }
}

export const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/cart");
      console.log("carts", response?.data);
      dispatch({ type: "set_cart", payload: response.data });
    };
    fetchData();
  }, []);
  // const addtoCart=async (productId) => {
  //   console.log('productId', productId)
  //   const response= await api.post("/cart",productId)
  //   dispatch({ type: "add_to_cart", payload: response.data })
  // }
  const addtoCart = async (productId) => {
  try {
    console.log('productId', productId);
    
    // Get current cart items to check if product already exists
    const cartResponse = await api.get("/cart");
    const cartItems = cartResponse.data;
    
    // Check if item already exists in cart
    const existingItem = cartItems.find(item => item.Itemid === productId);
    
    let response;
    
    if (existingItem) {
      // Update count +1 if item exists
      const updatedItem = {
        ...existingItem,
        count: existingItem.count + 1
      };
      
      // Use PUT to update existing item
      response = await api.put(`/cart/${existingItem?.id}`, updatedItem);
    } else {
      // Add new item with count 1 if doesn't exist
      const newItem = {
        Itemid: productId,
        count: 1
      };
      
      // Use POST to add new item
      response = await api.post("/cart", newItem);
    }
    
    dispatch({ type: "add_to_cart", payload: response.data });
    toast('Item Add to cart Successfully')
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}
  const removeCart=async (productId) => {
    await api.delete(`/cart/${productId}`)
    dispatch({ type: "remove_cart", payload: productId})
  }
  return (
    <CartContext.Provider value={{ cart: state.cart, addtoCart,removeCart}}>
      {children}
    </CartContext.Provider>
  );
};
