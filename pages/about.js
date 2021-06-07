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

                            <br />

                            <p>
                                I'm currently a junior in college studying Computer Science at De La Salle University in sunny Manila, Philippines.
                                The pair of glasses in my photos does justice for what I do 85% of my day: do stuff with my laptop.
                                Aside from browsing the web for historical tidbits or looking up song lyrics or going on Netflix, I spend my time writing either code or stories.
                            </p>

                            <p>
                                I live my days thinking about what I can innovate that could make a positive and lasting impact on even at least one person, myself included (mental health matters!).
                                W
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;