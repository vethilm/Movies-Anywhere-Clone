import NavItem from "./NavItem";
import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-container">
        <Link to="/">
          <NavItem></NavItem>
        </Link>
        <Link to="/home">
          <NavItem active="active" title="Home" />
        </Link>
        <Link to="/redeem">
          <NavItem title="Redeem" />
        </Link>
        <Link to="/my-movies">
          <NavItem title="My Movies" />
        </Link>
      </div>
    </>
  );
}

export default Header;
