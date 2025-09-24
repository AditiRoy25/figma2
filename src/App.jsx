import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./theme/Theme";
import { RouterProvider } from "react-router-dom";
import Routes from "./routing/Routes";
import Navbar from "./layout/Navbar";
import { Cartprovider } from "./hooks/context/cart/CartProvider";

function App() {
  return (
    <>
      <Cartprovider>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <RouterProvider router={Routes} />
          {/* <Navbar/> */}
        </ThemeProvider>
      </Cartprovider>
    </>
  );
}

export default App;
