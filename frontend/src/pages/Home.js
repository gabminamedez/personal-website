import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

import AsyncImage from '../components/AsyncImage';
import about from '../assets/images/home/about.jpg';
import portfolio from '../assets/images/home/portfolio.jpg';
import resume from '../assets/images/home/resume.jpg';
import blog from '../assets/images/home/blog.jpg';

import homeStyles from '../assets/styles/Home.module.css';

const Home = () => {
    const [displayImage, setDisplayImage] = useState(null);
    const [hover, setHover] = useState(false);

    const handleHover = (e, page) => {
        if (hover) {
            setHover(false);
            setDisplayImage(null);
        }
        else {
            setHover(true);
            setDisplayImage(page);
        }
    };

    return (
        <div>
            <Container className={homeStyles.home}>
                <div className={homeStyles.hero}>
                    <Row>
                        <Col md={6}>
                            <h1><span className={homeStyles.nametag}><i>What up world! It's</i></span>
                                <br />
                                <span className={homeStyles.name}>Gabriel Minamedez.</span>
                            </h1>
                        </Col>
                        <Col md={6}>
                            <p>
                                🇵🇭 Graduating Computer Science Student from Manila, PH
                                <br />
                                👨‍💻 Fullstack Web and Aspiring iOS Developer
                                <br />
                                ✍️ Semi-Professional Word Vomiter
                            </p>

                            <span className={homeStyles.socials}>
                                <a href='https://github.com/gabminamedez' target='_blank' className={homeStyles.social} rel='noreferrer'><FaGithub /></a>
                                <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={homeStyles.social} rel='noreferrer'><FaLinkedin /></a>
                                <a href='https://gabminamedez.medium.com/' target='_blank' className={homeStyles.social} rel='noreferrer'><FaMedium /></a>
                                <a href='https://music.apple.com/profile/gabminamedez' target='_blank' className={homeStyles.social} rel='noreferrer'><SiApplemusic /></a>
                                <a href='https://www.instagram.com/gabminamedez/' target='_blank' className={homeStyles.social} rel='noreferrer'><FaInstagram /></a>
                                <a href='https://twitter.com/GabMinamedez' target='_blank' className={homeStyles.social} rel='noreferrer'><FaTwitter /></a>
                            </span>
                        </Col>
                    </Row>
                </div>

                <div className={homeStyles.directory}>
                    <Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={400} animationOutDuration={400} isVisible={hover} className={homeStyles.prevImage}>
                        { 
                            {
                                'about': <AsyncImage className={homeStyles.prevImage} src={about} alt='img' onMouseOver={e => handleHover(e, '')} />,
                                'portfolio': <AsyncImage className={homeStyles.prevImage} src={portfolio} alt='img' onMouseOver={e => handleHover(e, '')} />,
                                'resume': <AsyncImage className={homeStyles.prevImage} src={resume} alt='img' onMouseOver={e => handleHover(e, '')} />,
                                'blog': <AsyncImage className={homeStyles.prevImage} src={blog} alt='img' onMouseOver={e => handleHover(e, '')} />,
                            }[displayImage]
                        }
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