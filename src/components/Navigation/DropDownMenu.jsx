import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import DropDownItem from "./DropDownItem";
const Resorts = require("../../config/resorts.json");

function DropDownMenu(props) {
	const [activeMenu, setActivemenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);
	const dropdownRef = useRef(null);

    // Create List of Resorts
    const list = Object.keys(Resorts).forEach((resort) => {
        return <DropDownItem link={Resorts[resort]}>{resort}</DropDownItem>
    });

	useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
	}, []);

	function calcHeight(el) {
		const height = el.offsetHeight;
		setMenuHeight(height);
	}

	return (
		<div
			className='dropdown'
			style={{ height: menuHeight }}
			ref={dropdownRef}>
			<CSSTransition
				in={activeMenu === "main"}
				timeout={500}
				classNames='menu-primary'
				unmountOnExit
				onEnter={calcHeight}>
				<div className='menu'>
                    {list}
                </div>
			</CSSTransition>
		</div>
	);
}

export default DropDownMenu;
