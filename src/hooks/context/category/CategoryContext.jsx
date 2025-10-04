import { useReducer, createContext } from "react";

const CategoryContext = createContext();

const initialState = {
  categories: [
    { id: 1, name: "Indian" },
    { id: 2, name: "Mexican" },
    { id: 3, name: "Italian" },
    { id: 4, name: "Chinese" },
    { id: 5, name: "Bengali" },
    { id: 6, name: "Arabian" },
    { id: 7, name: "Japanese" },
  ],
};

function reducer(state, action) {
  return state;
}

export const CategoryProvider = ({ children }) => {
  const [state] = useReducer(reducer, initialState);

  return (
    <CategoryContext.Provider value={{ ...state }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
