import { Container, Row, Col } from 'reactstrap';

import Head from '../components/Head';

import aboutStyles from '../styles/about.module.css';

const About = () => {
    return (
        <div>
            <Head title={'Gab Minamedez | About Me'} />

            <Container>
                <Row>
                    <Col lg={5}>
                        <img className={aboutStyles.aboutImage} src='/img/about.jpg' />
                    </Col>

                    <Col lg={7}>
                        <div className={aboutStyles.bioCol}>
                            <h1>What up world!<br />It's Gabriel Minamedez.</h1>
                            <p>some paragraph lorem hbcsbugvibdhivucvbicsvuyibibeivibivuvicbigonvwqohfigabhvibcodgibscjbkcaknoqhoqwlknvigewocnib</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;