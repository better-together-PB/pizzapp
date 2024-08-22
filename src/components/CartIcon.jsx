import styles from "./CartIcon.module.css";

function Cart({ cartItemsQuontity }) {
  return (
    <div className={styles.cartIcon} data-items={cartItemsQuontity}>
      🛒
    </div>
  );
}

export default Cart;
