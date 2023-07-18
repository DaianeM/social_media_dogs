import { Link } from "react-router-dom";

import Login from "../../pages/Login/Login";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
