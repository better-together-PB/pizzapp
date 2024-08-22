import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import CreatePizza from "./pages/CreatePizza";
import EditPizza from "./pages/EditPizza";

import styles from "./App.module.css";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const cartItemsQuontity = cart
    .map((pizza) => pizza.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  function handleAddPizzaToCart(pizza) {
    setCart((c) => {
      const pizzaIdAndSize = c.map((p) => ({ id: p.id, size: p.size }));
      const pizzaIsInCart = pizzaIdAndSize.some(
        (p) => p.id === pizza.id && p.size === pizza.size
      );

      if (pizzaIsInCart) {
        return c.map((p) => {
          if (p.id === pizza.id && p.size === pizza.size) {
            return { ...p, quantity: p.quantity + pizza.quantity };
          } else {
            return p;
          }
        });
      }
      return [...c, pizza];
    });
  }

  const handleChangePizzaSizeInCart = (id, newSize, oldSize) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (item) => item.id === id && item.size === oldSize
      );

      if (productIndex === -1) {
        return prevCart;
      }

      const updatedProduct = { ...prevCart[productIndex], size: newSize };

      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === id && item.size === newSize
      );

      if (existingProductIndex !== -1) {
        const updatedCart = prevCart.filter(
          (item, index) => index !== productIndex
        );

        const existingProductIndex = updatedCart.findIndex(
          (item) => item.id === id && item.size === newSize
        );

        const existingQuantity =
          updatedCart[existingProductIndex].quantity || 1;
        const updatedQuantity = prevCart[productIndex].quantity || 1;

        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: existingQuantity + updatedQuantity,
        };

        return updatedCart;
      } else {
        const updatedCart = [...prevCart];
        updatedCart[productIndex] = updatedProduct;
        return updatedCart;
      }
    });
  };

  function handleRemovePizzaFromCart(id, size) {
    setCart((c) =>
      c.filter(
        (pizza) => pizza.id !== id || (pizza.id === id && pizza.size !== size)
      )
    );
  }

  function handleIncreasePizzaQuantity(pizzaId, size) {
    setCart((c) => {
      const index = c.findIndex(
        (pizza) => pizza.id === pizzaId && pizza.size === size
      );
      const newCart = [...c];
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity + 1,
      };
      return newCart;
    });
  }
  function handleDecreasePizzaQuantity(pizzaId, size) {
    setCart((c) => {
      const index = c.findIndex((pizza) => pizza.id === pizzaId);

      if (c[index].quantity === 1)
        return c.filter(
          (pizza) =>
            pizza.id !== pizzaId ||
            (pizza.id === pizzaId && pizza.size !== size)
        );

      const newCart = [...c];
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity - 1,
      };
      return newCart;
    });
  }

  return (
    <div className={styles.page}>
      <Header cartItemsQuontity={cartItemsQuontity} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={<Menu onAddPizzaToCart={handleAddPizzaToCart} />}
        />
        <Route
          path="/menu/:typeOfPizza"
          element={<Menu onAddPizzaToCart={handleAddPizzaToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onChangePizzaSizeInCart={handleChangePizzaSizeInCart}
              onRemovePizzaFromCart={handleRemovePizzaFromCart}
              onIncreasePizzaQuantity={handleIncreasePizzaQuantity}
              onDecreasePizzaQuantity={handleDecreasePizzaQuantity}
            />
          }
        />
        <Route path="/createPizza" element={<CreatePizza />} />
        <Route path="/editPizza/:id" element={<EditPizza />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
