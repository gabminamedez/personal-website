import footerStyles from '../styles/Footer.module.css';

function Footer() {
    return (
        <div className={footerStyles.footer}>
            <p>Copyright © 2021 Gab Minamedez.<br /><a href='/'>Home</a> • <a href='/about'>About Me</a> • <a href='https://gabminamedez.medium.com' target='_blank'>Blog</a> • <a href='/portfolio'>Portfolio</a> • <a href='/resume'>Resume</a></p>
        </div>
    );
}

export default Footer;