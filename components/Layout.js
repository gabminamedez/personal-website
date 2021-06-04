import { useState } from 'react';

import Brand from './Brand';
import Footer from './Footer';
import Menu from './Menu';
import MenuButton from './MenuButton';

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div style={{marginTop: '-25px'}}>
                <Brand />
                <MenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
            </div>
            <Menu isOpen={isOpen} />
            
            <div style={{position: 'relative', zIndex: 1}}>
                {children}
            </div>
        </>
    )
}

export default Layout;