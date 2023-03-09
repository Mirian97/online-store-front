import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { theme } from "./theme/index";

function MainRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default MainRoutes;
