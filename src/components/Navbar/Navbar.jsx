import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="header__nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/catalog">
            Магазин
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/cart">
            Корзина
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
