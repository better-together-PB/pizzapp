import styles from "./Cart.module.css";

function Cart() {
  return (
    <main className={styles.main}>
      <h2>Your Cart</h2>
      <div className={styles.orderItems}>
        <div className={styles.pizzaItem}>
          <h3 className={styles.pizzaName}>
            Pizza: <span>Margheritha</span>
          </h3>
          <p className={styles.pizzaPrice}>
            Price: <span>8.99</span>
          </p>
          <p className={styles.pizzaSize}>
            Size:{" "}
            <select name="size" id="size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </p>
          <div className={styles.amountContainer}>
            <button className={styles.decreaseAmount}>-</button>
            <p>
              Amount: <span>1</span> €
            </p>
            <button className={styles.increaseAmout}>+</button>
          </div>
          <button className={styles.removeBtn}>REMOVE</button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
