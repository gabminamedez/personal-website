import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaSpotify, FaTwitter } from 'react-icons/fa';

import footerStyles from '../assets/styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <p>
                © { new Date().getFullYear() } Gabriel Minamedez.
                <br />
                <a href='https://github.com/gabminamedez' target='_blank' className={footerStyles.social} rel='noreferrer'><FaGithub /></a>
                <a href='https://www.instagram.com/gabminamedez/' target='_blank' className={footerStyles.social} rel='noreferrer'><FaInstagram /></a>
                <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={footerStyles.social} rel='noreferrer'><FaLinkedin /></a>
                <a href='https://gabminamedez.medium.com/' target='_blank' className={footerStyles.social} rel='noreferrer'><FaMedium /></a>
                <a href='https://open.spotify.com/user/dirgfk4e07s0pggwbexjxmjbw?si=3370afe5c3404fcc' target='_blank' className={footerStyles.social} rel='noreferrer'><FaSpotify /></a>
                <a href='https://twitter.com/GabMinamedez' target='_blank' className={footerStyles.social} rel='noreferrer'><FaTwitter /></a>
            </p>
        </div>
    );
}

export default Footer;