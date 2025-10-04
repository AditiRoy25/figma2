import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./theme/Theme";
import { RouterProvider } from "react-router-dom";
import Routes from "./routing/Routes";
import Navbar from "./layout/Navbar";
import { Cartprovider } from "./hooks/context/cart/CartProvider";
import { WishProvider } from "./hooks/context/WishlistList/WishProvider";
import { AuthProvider } from "./hooks/context/Auth/AuthProvider";
import { ProductProvider } from "./hooks/context/product/ProductProvider";
import {CategoryProvider} from "./hooks/context/category/CategoryContext";

function App() {
  return (
    <>
    
    <AuthProvider>
      <ProductProvider>
      <Cartprovider>
        <WishProvider>
         <CategoryProvider>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <RouterProvider router={Routes} />
          {/* <Navbar/> */}
        </ThemeProvider>
        </CategoryProvider>
        </WishProvider>
      </Cartprovider>
      </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
