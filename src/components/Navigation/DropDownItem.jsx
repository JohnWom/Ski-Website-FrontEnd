function DropDownItem() {
    return ( 
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.iconLeft}</span>
            {props.children}
            <span className="icon-right">{props.iconRight}</span>
        </a>
     );
}

export default DropDownItem;