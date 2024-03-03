import "./NavItem.css";

function NavItem(props) {
  return (
    <>
      {props.title == null && (
        <img
          className="logoImg"
          src="https://theme.zdassets.com/theme_assets/1226579/55109e789eb1acccecf224564e9ac301c9acf7e0.png"
        ></img>
      )}
      <div className="navTitle">
        <h1 className={props.active}>{props.title}</h1>
      </div>
    </>
  );
}

export default NavItem;
