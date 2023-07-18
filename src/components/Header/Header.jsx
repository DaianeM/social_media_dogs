import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";

import Login from "../../pages/Login/Login";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
