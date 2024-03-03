import NavItem from "./NavItem";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <NavItem></NavItem>
        <NavItem active="active" title="Home" />
        <NavItem title="Redeem" />
        <NavItem title="My Movies" />
      </div>
    </>
  );
}

export default Header;
