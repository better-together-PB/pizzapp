import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* IMAGE, WESITE NAME */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">All</NavLink>
        <NavLink to="menu/premium">Premium</NavLink>
        <NavLink to="menu/traditional">Traditional</NavLink>
        <NavLink to="menu/favorites">Favorites</NavLink>
        <NavLink to="menu/custom">Custom</NavLink>
        <NavLink to="/createPizza">Create your pizza</NavLink>
      </nav>
      {/* CART */}
    </header>
  );
}

export default Header;
