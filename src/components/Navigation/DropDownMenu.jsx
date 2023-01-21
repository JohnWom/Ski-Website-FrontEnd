import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function DropDownMenu(props) {
    const [activeMenu, setActivemenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect( () => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, []);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }


    return (
        <div className='dropdown' style={ {height: menuHeight} } ref={dropdownRef}>
            <CSSTransition
                in={activeMenu==='main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                    <div className='menu'>
                        PLACE MENU ITEMS HERE
                    </div>
                </CSSTransition>
                
                create CSS Transition with same properties for other menus
        </div>
    );

}

export default DropDownMenu;