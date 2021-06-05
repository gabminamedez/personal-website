import { Row, Col } from 'reactstrap';

import homeStyles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div>
            <Row mx={0} fluid>
                <Col sm={4}>
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

                <Col sm={8}>
                    <div className={homeStyles.rightCol}>
                        <h1>Right</h1>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;