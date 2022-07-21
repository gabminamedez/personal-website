import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Animated } from 'react-animated-css';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaSpotify, FaTwitter } from 'react-icons/fa';

import homeStyles from '../assets/styles/Home.module.css';

const Home = () => {
    const [displayImage, setDisplayImage] = useState(null);
    const [hover, setHover] = useState(false);

    const handleHover = (e, page) => {
        if(hover){
            setHover(false);
            setDisplayImage(null);
        }
        else{
            setHover(true);
            setDisplayImage('../assets/images/home/' + page + '.jpg');
        }
    }

    return (
        <div>
            <Container className={homeStyles.home}>
                <div className={homeStyles.heading}>
                    <h1>What up world!<br />It's <span className={homeStyles.name}>Gabriel Minamedez</span>.</h1>

                    <p>
                        🇵🇭 Computer Science Student from Manila, PH
                        <br />
                        👨‍💻 Aspiring Web and iOS Developer
                        <br />
                        ✍️ Semi-Professional Word Vomiter
                    </p>

                    <span className={homeStyles.socials}>
                        <a href='https://github.com/gabminamedez' target='_blank' className={homeStyles.social} rel='noreferrer'><FaGithub /></a>
                        <a href='https://www.instagram.com/gabminamedez/' target='_blank' className={homeStyles.social} rel='noreferrer'><FaInstagram /></a>
                        <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={homeStyles.social} rel='noreferrer'><FaLinkedin /></a>
                        <a href='https://gabminamedez.medium.com/' target='_blank' className={homeStyles.social} rel='noreferrer'><FaMedium /></a>
                        <a href='https://open.spotify.com/user/dirgfk4e07s0pggwbexjxmjbw?si=3370afe5c3404fcc' target='_blank' className={homeStyles.social} rel='noreferrer'><FaSpotify /></a>
                        <a href='https://twitter.com/GabMinamedez' target='_blank' className={homeStyles.social} rel='noreferrer'><FaTwitter /></a>
                    </span>
                </div>

                <div className={homeStyles.directory}>
                    <Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={400} animationOutDuration={400} isVisible={hover} className={homeStyles.prevImage}>
                        { displayImage == null ? <></> : <img className={homeStyles.prevImage} src={displayImage} alt='img' /> }
                    </Animated>
                    
                    <div className={homeStyles.directoryText}>
                        <h2 onMouseOver={e => handleHover(e, 'about')} onMouseOut={e => handleHover(e, 'about')}><Link to='/about'>About</Link></h2>
                        <h2 onMouseOver={e => handleHover(e, 'portfolio')} onMouseOut={e => handleHover(e, 'portfolio')}><Link to='/portfolio'>Portfolio</Link></h2>
                        <h2 onMouseOver={e => handleHover(e, 'resume')} onMouseOut={e => handleHover(e, 'resume')}><a href='https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a></h2>
                        <h2 onMouseOver={e => handleHover(e, 'blog')} onMouseOut={e => handleHover(e, 'blog')}><a href='https://gabminamedez.medium.com/' target='_blank' rel='noreferrer'>Blog</a></h2>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;