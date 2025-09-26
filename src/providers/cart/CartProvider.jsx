import { useState, useEffect } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import cartContext from "../../context/cart/cartContext";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/localStorage";

export default function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const changeQuantity = (id, qty) => {
    if (qty < 1) return;
    const newItems = items.map((item) => {
      if (item.productId === id) {
        return { ...item, qty, subTotal: item.price * qty };
      }
      return item;
    });
    // localStorage.setItem("cartItems", JSON.stringify(newItems));
    saveToLocalStorage("cartItems", newItems);
    setItems(newItems);
  };

  const calculateTotal = () => {
    let t = 0;
    items.forEach((item) => {
      t += item.subTotal;
    });
    setTotal(t);
  };

  const addItem = (product) => {
    const item = items.find((item) => item.productId === product.id);
    if (item) {
      changeQuantity(item.id, item.qty + 1);
    } else {
      const data = [...items, { ...product, qty: 1, subTotal: product.price }];
      saveToLocalStorage("cartItems", data);
      setItems(data);
    }
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.productId !== id);
    saveToLocalStorage("cartItems", newItems);
    setItems(newItems);
  };

  useEffect(() => {
    const cartItems = getFromLocalStorage("cartItems")
    calculateTotal()
    setItems(cartItems);
  }, []);

  return (
    <cartContext.Provider
      value={{
        items,
        setItems,
        addItem,
        total,
        changeQuantity,
        calculateTotal,
        removeItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node,
};
