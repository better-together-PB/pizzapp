import styles from "./Cart.module.css";

function Cart({
  cart,
  onChangePizzaSizeInCart,
  onRemovePizzaFromCart,
  onIncreasePizzaQuantity,
  onDecreasePizzaQuantity,
}) {
  let totalPrice = 0;

  for (const pizza of cart) {
    if (pizza.size === "small") {
      totalPrice += pizza.quantity * (pizza.price - 1);
    } else if (pizza.size === "medium") {
      totalPrice += pizza.quantity * pizza.price;
    } else if (pizza.size === "large") {
      totalPrice += pizza.quantity * (pizza.price + 1);
    }
  }

  totalPrice = totalPrice.toFixed(2);

  return (
    <main className={styles.main}>
      {cart.length ? (
        <div className={styles.cartPage}>
          <h2>Your Cart</h2>
          <div className={styles.orderItems}>
            {cart.map((item) => {
              const pizzaPrice = {
                small: item.price - 1,
                medium: item.price,
                large: item.price + 1,
              };
              return (
                <div
                  key={`${item.id}${item.size}`}
                  className={styles.pizzaItem}
                >
                  <h3 className={styles.pizzaName}>
                    <span>{item.name}</span>
                  </h3>
                  <p className={styles.pizzaPrice}>
                    Price:{" "}
                    <span>
                      {pizzaPrice[item.size]} €{" "}
                      {item.quantity > 1 ? `x ${item.quantity}` : ""}
                    </span>
                  </p>
                  <p className={styles.pizzaSize}>
                    Size:
                    <select
                      name="size"
                      id="size"
                      value={item.size}
                      onChange={(e) => {
                        onChangePizzaSizeInCart(
                          item.id,
                          e.target.value,
                          item.size
                        );
                      }}
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </p>
                  <div className={styles.amountContainer}>
                    <button
                      className={styles.decreaseAmount}
                      onClick={() =>
                        onDecreasePizzaQuantity(item.id, item.size)
                      }
                    >
                      -
                    </button>
                    <p>
                      Amount: <span>{item.quantity}</span>
                    </p>
                    <button
                      className={styles.increaseAmout}
                      onClick={() =>
                        onIncreasePizzaQuantity(item.id, item.size)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => onRemovePizzaFromCart(item.id, item.size)}
                  >
                    REMOVE
                  </button>
                </div>
              );
            })}
          </div>
          <h3 className={styles.totalPrice}>Total price: {totalPrice} €</h3>
        </div>
      ) : (
        <h2>You have no items in your cart</h2>
      )}
    </main>
  );
}

export default Cart;
