import "./Navbar.scss";

const Navbar = () => {
  return (
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/catalog" className="nav__link">
              Catalog
            </a>
          </li>
          <li className="nav__item">
            <a href="/cart" className="nav__link">
              Cart
            </a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
