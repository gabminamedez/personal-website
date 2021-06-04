import menuStyles from '../styles/Menu.module.css';

function Menu({isOpen}) {

    return (
        <div>
            {   isOpen ?
                    <div className={menuStyles.menu}>
                        <div className={menuStyles.menuContent}>
                            <h1><a href='/about' target='_blank'>About Me</a></h1>
                            <h1><a href='https://gabminamedez.medium.com' target='_blank'>Blog</a></h1>
                            <h1><a href='/portfolio' target='_blank'>Portfolio</a></h1>
                            <h1><a href='' target='_blank'>Resumé</a></h1>
                        </div>
                    </div>
                :
                    <div></div>
            }
        </div>
    );
}

export default Menu;