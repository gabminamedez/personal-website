import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaSpotify, FaTwitter } from 'react-icons/fa';

import Head from '../components/Head';
import AsyncImage from '../components/AsyncImage';

import homeStyles from '../styles/home.module.css';

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
            setDisplayImage('/img/home/' + page + '.jpg');
        }
    }

    return (
        <div>
            <Head title={'Home | Gab Minamedez'}
                  description={'Gabriel Minamedez. Gab is a senior Computer Science student in De La Salle University in the Philippines. He is an aspiring web and iOS developer. On his off days, he loves to write about anything under the scorching sun. © 2021 Gabriel Minamedez.'}
                  title2={'Home'}
                  url={'https://gabminamedez.github.io/'}
            />

            <Container className={homeStyles.home}>
                <div className={homeStyles.heading}>
                    <h1>What up world!<br />It's Gabriel Minamedez.</h1>

                    <p>
                        🇵🇭 Computer Science Student from Manila, PH
                        <br />
                        👨‍💻 Aspiring Web and iOS Developer
                        <br />
                        ✍️ Semi-Professional Word Vomiter
                    </p>

                    <span className={homeStyles.socials}>
                        <a href='https://github.com/gabminamedez' target='_blank' className={homeStyles.social}><FaGithub /></a>
                        <a href='https://www.instagram.com/gabminamedez/' target='_blank' className={homeStyles.social}><FaInstagram /></a>
                        <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={homeStyles.social}><FaLinkedin /></a>
                        <a href='https://gabminamedez.medium.com/' target='_blank' className={homeStyles.social}><FaMedium /></a>
                        <a href='https://open.spotify.com/user/dirgfk4e07s0pggwbexjxmjbw?si=3370afe5c3404fcc' target='_blank' className={homeStyles.social}><FaSpotify /></a>
                        <a href='https://twitter.com/GabMinamedez' target='_blank' className={homeStyles.social}><FaTwitter /></a>
                    </span>
                </div>

                <div className={homeStyles.directory}>
                    <Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={400} animationOutDuration={400} isVisible={hover} className={homeStyles.prevImage}>
                        {
                            displayImage == null ? <></> : <AsyncImage className={homeStyles.prevImage} src={displayImage} />
                        }
                    </Animated>
                    
                    <div className={homeStyles.directoryText}>
                        <h2 onMouseOver={e => handleHover(e, 'about')} onMouseOut={e => handleHover(e, 'about')}><a href='/about'>About Me</a></h2>
                        <h2 onMouseOver={e => handleHover(e, 'blog')} onMouseOut={e => handleHover(e, 'blog')}><a href='https://gabminamedez.medium.com/' target='_blank'>Blog</a></h2>
                        <h2 onMouseOver={e => handleHover(e, 'portfolio')} onMouseOut={e => handleHover(e, 'portfolio')}><a href='/portfolio'>Portfolio</a></h2>
                        <h2 onMouseOver={e => handleHover(e, 'resume')} onMouseOut={e => handleHover(e, 'resume')}><a href='/resume'>Resume</a></h2>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;