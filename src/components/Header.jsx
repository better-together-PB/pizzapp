import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        🍕 Pizza Palace <span className={styles.rotatedPizza}>🍕</span>
      </NavLink>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/menu"
          end
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/menu/premium"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
        >
          Premium
        </NavLink>
        <NavLink
          to="/menu/traditional"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
        >
          Traditional
        </NavLink>
        <NavLink
          to="/menu/favorites"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
        >
          Favorites
        </NavLink>
        <NavLink
          to="/menu/custom"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
        >
          Custom
        </NavLink>

        <NavLink
          to="/createPizza"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
        >
          Create your pizza
        </NavLink>
      </nav>
      <div className={styles.cartIcon} data-items="99+">
        🛒
      </div>
    </header>
  );
}

export default Header;
