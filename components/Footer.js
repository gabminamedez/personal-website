import footerStyles from '../styles/Footer.module.css';

import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaSpotify, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <div className={footerStyles.footer}>
            <p>
                © { new Date().getFullYear() } Gabriel Minamedez.
                <br />
                <a href='https://github.com/gabminamedez' target='_blank' className={footerStyles.social}><FaGithub /></a>
                <a href='https://www.instagram.com/gabminamedez/' target='_blank' className={footerStyles.social}><FaInstagram /></a>
                <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={footerStyles.social}><FaLinkedin /></a>
                <a href='https://gabminamedez.medium.com/' target='_blank' className={footerStyles.social}><FaMedium /></a>
                <a href='https://open.spotify.com/user/dirgfk4e07s0pggwbexjxmjbw?si=3370afe5c3404fcc' target='_blank' className={footerStyles.social}><FaSpotify /></a>
                <a href='https://twitter.com/GabMinamedez' target='_blank' className={footerStyles.social}><FaTwitter /></a>
            </p>
        </div>
    );
}

export default Footer;