import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* IMAGE, WESITE NAME */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/premium">Premium</NavLink>
        <NavLink to="/traditional">Traditional</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/custom">Custom</NavLink>
        <NavLink to="/create">Create your pizza</NavLink>
      </nav>
      {/* CART */}
    </header>
  );
}

export default Header;
