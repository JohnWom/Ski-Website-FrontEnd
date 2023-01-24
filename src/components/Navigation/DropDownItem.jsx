// Component that creates Item in DropDown Menu
//
//
function DropDownItem(props) {
    return ( 
        <a href={props.link} className="menu-item">
            <span className="icon-button">{props.iconLeft}</span>
            {props.children}
            <span className="icon-right">{props.iconRight}</span>
        </a>
     );
}

export default DropDownItem;