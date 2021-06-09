import { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaSpotify, FaTwitter } from 'react-icons/fa';

import Head from '../components/Head';

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
            setDisplayImage('/img/' + page + '.jpg');
        }
    }

    return (
        <div>
            <Head title={'Gab Minamedez | Home'} />

            <Row mx={0} fluid='true'>
                <Col lg={5}>
                    <div className={homeStyles.leftCol}>
                        <h1>What up world!<br />It's Gabriel Minamedez.</h1>
                        <p><i>...but you can call me Gab for short.</i></p>

                        <img className={homeStyles.dpImage} src='/img/dp.jpg' />

                        <p>
                            🇵🇭 Computer Science Student in Manila, Philippines
                            <br />
                            👨‍💻 Aspiring Web Developer and Machine Learning Engineer
                            <br />
                            ✍️ Semi-Professional Word Vomiter
                        </p>

                        <FaGithub className={homeStyles.social} />
                        <FaInstagram className={homeStyles.social} />
                        <FaLinkedin className={homeStyles.social} />
                        <FaMedium className={homeStyles.social} />
                        <FaSpotify className={homeStyles.social} />
                        <FaTwitter className={homeStyles.social} />
                    </div>
                </Col>

                <Col lg={7}>
                    <div className={homeStyles.rightCol}>
                        <Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={400} animationOutDuration={400} isVisible={hover} className={homeStyles.prevImage}>
                            <img className={homeStyles.prevImage} src={displayImage} />
                        </Animated>
                        
                        <div className={homeStyles.rightColText}>
                            <h1 onMouseOver={e => handleHover(e, 'about')} onMouseOut={e => handleHover(e, 'about')}><a href='/about'>About Me</a></h1>
                            <h1 onMouseOver={e => handleHover(e, 'blog')} onMouseOut={e => handleHover(e, 'blog')}><a href='https://gabminamedez.medium.com' target='_blank'>Blog</a></h1>
                            <h1 onMouseOver={e => handleHover(e, 'portfolio')} onMouseOut={e => handleHover(e, 'portfolio')}><a href='/portfolio'>Portfolio</a></h1>
                            <h1 onMouseOver={e => handleHover(e, 'resume')} onMouseOut={e => handleHover(e, 'resume')}><a href='https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing' target='_blank'>Resumé</a></h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;