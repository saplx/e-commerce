import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">My Store</div>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
