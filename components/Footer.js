import footerStyles from '../styles/Footer.module.css';

function Footer() {
    return (
        <div className={footerStyles.footer}>
            <p>Copyright © 2021 Gab Minamedez.<br /><a href='/'>Home</a> • <a href='/about'>About Me</a> • <a href='https://gabminamedez.medium.com' target='_blank'>Blog</a> • <a href='/portfolio'>Portfolio</a> • <a href='https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing' target='_blank'>Resumé</a></p>
        </div>
    );
}

export default Footer;