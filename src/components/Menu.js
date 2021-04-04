import { useState } from 'react';

function Menu() {
    const isOpenStyles = {
        display: "none"
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="menu" onClick={toggleMenu}>
            <div id="hamburger" styles={!isOpen && isOpenStyles}>
                <div></div>
            </div>
        </div>
    );
}

export default Menu;