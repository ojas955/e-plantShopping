import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Paradise Nursery
      </Link>
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart
          <span className="cart-badge">{totalQuantity}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
