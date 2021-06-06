import { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';

import Head from '../components/Head';

import homeStyles from '../styles/Home.module.css';

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
                            🇵🇭 Computer Science Student in Sunny Manila
                            <br />
                            👨‍💻 Aspiring Web Developer and ML Engineer
                            <br />
                            ✍️ Semi-Professional Word Vomiter
                        </p>
                    </div>
                </Col>

                <Col lg={7}>
                    <div className={homeStyles.rightCol}>
                        <Animated animationIn='fadeIn' animationOut='fadeOut' animationInDuration={400} animationOutDuration={400} isVisible={hover} className={homeStyles.prevImg}>
                            <img className={homeStyles.prevImg} src={displayImage} />
                        </Animated>
                        
                        <div className={homeStyles.rightColText}>
                            <h1 onMouseOver={e => handleHover(e, 'about')} onMouseOut={e => handleHover(e, 'about')}><a href='/about'>About Me</a></h1>
                            <h1 onMouseOver={e => handleHover(e, 'blog')} onMouseOut={e => handleHover(e, 'blog')}><a href='https://gabminamedez.medium.com' target='_blank'>Blog</a></h1>
                            <h1 onMouseOver={e => handleHover(e, 'portfolio')} onMouseOut={e => handleHover(e, 'portfolio')}><a href='/portfolio'>Portfolio</a></h1>
                            <h1 onMouseOver={e => handleHover(e, 'resume')} onMouseOut={e => handleHover(e, 'resume')}><a href='/'>Resumé</a></h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;