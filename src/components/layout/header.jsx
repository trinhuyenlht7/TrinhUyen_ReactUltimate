import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/">TODO</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users">USER</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products">PRODUCTS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register">REGISTER</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
