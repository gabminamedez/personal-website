import { useState } from 'react';

import menuStyles from '../styles/Menu.module.css';

function Menu() {
    const isOpenStyles = {
        display: 'none'
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={menuStyles.menu} onClick={toggleMenu}>
            <div className={menuStyles.hamburger} styles={!isOpen && isOpenStyles}>
                <div></div>
            </div>
        </div>
    );
}

export default Menu;