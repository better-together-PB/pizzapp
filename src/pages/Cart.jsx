import styles from "./Cart.module.css";

function Cart({ cart }) {
  console.log(cart);
  // {
  //   id, name, price, size, quantity;
  // }

  return (
    <main className={styles.main}>
      <h2>Your Cart</h2>
      <div className={styles.orderItems}>
        {cart.map((item) => {
          const pizzaPrice = {
            small: item.price - 1,
            medium: item.price,
            large: item.price + 1,
          };
          return (
            <div key={item.id} className={styles.pizzaItem}>
              <h3 className={styles.pizzaName}>
                Pizza: <span>{item.name}</span>
              </h3>
              <p className={styles.pizzaPrice}>
                Price: <span>{pizzaPrice[item.size]}</span>
              </p>
              <p className={styles.pizzaSize}>
                Size:{" "}
                <select name="size" id="size" value={item.size}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </p>
              <div className={styles.amountContainer}>
                <button className={styles.decreaseAmount}>-</button>
                <p>
                  Amount: <span>{item.quantity}</span> €
                </p>
                <button className={styles.increaseAmout}>+</button>
              </div>
              <button className={styles.removeBtn}>REMOVE</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Cart;
