import styles from "./CartIcon.module.css";

function Cart() {
  return (
    <div className={styles.cartIcon} data-items="0">
      🛒
    </div>
  );
}

export default Cart;
