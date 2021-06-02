import Brand from './Brand';
import Footer from './Footer';
import Menu from './Menu';

const Layout = ({ children }) => {
    return (
        <>
            <Brand />
            <Menu />
            
            {children}
        </>
    )
}

export default Layout;