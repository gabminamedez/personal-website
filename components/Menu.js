import menuStyles from '../styles/Menu.module.css';

function Menu({isOpen}) {

    return (
        <div>
            {   isOpen ?
                    <div className={menuStyles.menu}>
                        <h1>Yeet</h1>
                    </div>
                :
                    <div></div>
            }
        </div>
    );
}

export default Menu;