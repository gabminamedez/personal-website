import { useState } from 'react';
import { Row, Col } from 'reactstrap';

import homeStyles from '../styles/Home.module.css';

const Home = () => {
    const [displayImage, setDisplayImage] = useState('none');
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        if(hover){
            setHover(false);
            setDisplayImage('none');
        }
        else{
            setHover(true);
            setDisplayImage('block');
        }
    }

    return (
        <div>
            <Row mx={0} fluid>
                <Col sm={6}>
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

                <Col sm={6}>
                    <div className={homeStyles.rightCol}>
                        {hover ? <img className={homeStyles.prevImg} src='/img/sample.jpg' /> : <div></div>}
                        
                        <div className={homeStyles.rightColText}>
                            <h1 onMouseOver={handleHover} onMouseLeave={handleHover}><a href='/about'>About Me</a></h1>
                            <h1><a href='https://gabminamedez.medium.com' target='_blank'>Blog</a></h1>
                            <h1><a href='/portfolio'>Portfolio</a></h1>
                            <h1><a href='/'>Resumé</a></h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;