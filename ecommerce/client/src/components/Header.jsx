import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Geekster Ecommerce</Link>
      </h1>

      <ul>
        <li>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
