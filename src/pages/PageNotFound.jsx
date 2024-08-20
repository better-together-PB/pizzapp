import styles from "./PageNotFound.module.css";
import sadPizza from "../Assets/Images/sadPizza.png";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className={styles.notfoundContainer}>
      <p className={styles.main}>404 ERROR - PIZZA NOT FOUND</p>
      <p className={styles.notfoundMsg1}>
        This page isn't available, might be removed, name changed or is
        temporarily unavailable
      </p>
      <p className={styles.notfoundMsg2}>
        Try our incredible pizzas{" "}
        <NavLink
          to="/menu"
          style={{
            cursor: "pointer",
            textDecoration: "none",
            fontSize: "80px",
          }}
        >
          🍕
        </NavLink>
      </p>
      <img src={sadPizza} className={styles.notfoundGif} alt="Sad Pizza" />
    </div>
  );
}

export default PageNotFound;
