import menuButtonStyles from "src/styles/MenuButton.module.css";

type MenuButtonProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MenuButton = ({ isOpen, toggleMenu }: MenuButtonProps) => {
  return (
    <div>
      <div
        className={
          isOpen
            ? menuButtonStyles.menuButtonOpen
            : menuButtonStyles.menuButtonClosed
        }
        onClick={toggleMenu}
      >
        <div
          className={
            isOpen
              ? menuButtonStyles.hamburgerOpen
              : menuButtonStyles.hamburgerClosed
          }
        >
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
