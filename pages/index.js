import { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';
import { SiApplemusic } from 'react-icons/si';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';

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
                  description={'Gabriel is a junior Computer Science student in De La Salle University in the Philippines. He is an aspiring web developer and machine learning engineer. On his off days, he loves to write about anything under the scorching sun. © 2021 Gabriel Minamedez.'}
                  title2={'Home'}
                  url={'https://gabminamedez.herokuapp.com/'}
            />

            <Row mx={0} fluid='true'>
                <Col lg={5}>
                    <div className={homeStyles.leftCol}>
                        <h1>What up world!<br />It's Gabriel Minamedez.</h1>
                        
                        <AsyncImage className={homeStyles.dpImage} src='/img/home/dp.jpg' />

                        <p>
                            🇵🇭 Computer Science Student in Manila, Philippines
                            <br />
                            👨‍💻 Aspiring Web Developer and Machine Learning Engineer
                            <br />
                            ✍️ Semi-Professional Word Vomiter
                        </p>

                        <span className={homeStyles.socials}>
                            <a href='https://music.apple.com/profile/gabminamedez' target='_blank' className={homeStyles.social}><SiApplemusic /></a>
                            <a href='https://github.com/gabminamedez' target='_blank' className={homeStyles.social}><FaGithub /></a>
                            <a href='https://www.instagram.com/gabminamedez/' target='_blank' className={homeStyles.social}><FaInstagram /></a>
                            <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={homeStyles.social}><FaLinkedin /></a>
                            <a href='https://gabminamedez.medium.com/' target='_blank' className={homeStyles.social}><FaMedium /></a>
                            <a href='https://twitter.com/GabMinamedez' target='_blank' className={homeStyles.social}><FaTwitter /></a>
                        </span>
                    </div>
                </Col>

                <Col lg={7}>
                    <div className={homeStyles.rightCol}>
                        <Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={400} animationOutDuration={400} isVisible={hover} className={homeStyles.prevImage}>
                            {
                                displayImage == null ? <></> : <AsyncImage className={homeStyles.prevImage} src={displayImage} />
                            }
                        </Animated>
                        
                        <div className={homeStyles.rightColText}>
                            <h1 onMouseOver={e => handleHover(e, 'about')} onMouseOut={e => handleHover(e, 'about')}><a href='/about'>About Me</a></h1>
                            <h1 onMouseOver={e => handleHover(e, 'blog')} onMouseOut={e => handleHover(e, 'blog')}><a href='/blog'>Blog</a></h1>
                            <h1 onMouseOver={e => handleHover(e, 'portfolio')} onMouseOut={e => handleHover(e, 'portfolio')}><a href='/portfolio'>Portfolio</a></h1>
                            <h1 onMouseOver={e => handleHover(e, 'resume')} onMouseOut={e => handleHover(e, 'resume')}><a href='/resume'>Resume/CV</a></h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;