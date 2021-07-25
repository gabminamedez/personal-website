import footerStyles from '../styles/Footer.module.css';

import { SiApplemusic } from 'react-icons/si';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <div className={footerStyles.footer}>
            <p>
                © { new Date().getFullYear() } Gabriel Minamedez.
                <br />
                <a href='https://music.apple.com/profile/gabminamedez' target='_blank' className={footerStyles.social}><SiApplemusic /></a>
                <a href='https://github.com/gabminamedez' target='_blank' className={footerStyles.social}><FaGithub /></a>
                <a href='https://www.instagram.com/gabminamedez/' target='_blank' className={footerStyles.social}><FaInstagram /></a>
                <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={footerStyles.social}><FaLinkedin /></a>
                <a href='https://gabminamedez.medium.com/' target='_blank' className={footerStyles.social}><FaMedium /></a>
                <a href='https://twitter.com/GabMinamedez' target='_blank' className={footerStyles.social}><FaTwitter /></a>
            </p>
        </div>
    );
}

export default Footer;