import "./NavItem.css"

function NavItem(props){
    return(
        <h1 className={props.active}>{props.title}</h1>
    )
    
}

export default NavItem;