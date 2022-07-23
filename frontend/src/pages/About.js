import { Container, Row, Col } from 'reactstrap';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

import about from '../assets/images/home/about.jpg';

import aboutStyles from '../assets/styles/About.module.css';

const About = () => {
    return (
        <div>
            <Container>
                <Row className={aboutStyles.headDiv}>
                    <Col lg={7}>
                        <div className={aboutStyles.bioCol}>
                        <h1><span className={aboutStyles.nametag}><i>What up world! It's</i></span>
                            <br />
                            <span className={aboutStyles.name}>Gabriel Minamedez.</span>
                        </h1>

                            <br />

                            <p>I'm currently a senior studying Computer Science at De La Salle University in sunny Manila, Philippines. The pair of glasses in my photos does justice for what I do 75% of my day: writing either code or stories with my laptop.</p>
                            <p>I live my days constantly thinking about what I can innovate that could make a positive and lasting impact on even at least one person. That has always been my driving force in everything I do, whether I'm developing an application that I believe can help somebody, or writing an elaborate piece where I can air out my reservoir of thoughts.</p>
                            <p>I spend the remaining 25% of my days doing the most random stuff! A perfectly peaceful day to me involves reading books, looking up historical tidbits, playing basketball, discovering music, and listening to podcasts.</p>
                        </div>
                    </Col>

                    <Col lg={5} className={aboutStyles.aboutImageCol}>
                        <img className={aboutStyles.aboutImage} src={about} alt='img' />

                        <span className={aboutStyles.socials}>
                            <a href='https://github.com/gabminamedez' target='_blank' className={aboutStyles.social} rel='noreferrer'><FaGithub /></a>
                            <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={aboutStyles.social} rel='noreferrer'><FaLinkedin /></a>
                            <a href='https://gabminamedez.medium.com/' target='_blank' className={aboutStyles.social} rel='noreferrer'><FaMedium /></a>
                            <a href='https://music.apple.com/profile/gabminamedez' target='_blank' className={aboutStyles.social} rel='noreferrer'><SiApplemusic /></a>
                            <a href='https://www.instagram.com/gabminamedez/' target='_blank' className={aboutStyles.social} rel='noreferrer'><FaInstagram /></a>
                            <a href='https://twitter.com/GabMinamedez' target='_blank' className={aboutStyles.social} rel='noreferrer'><FaTwitter /></a>
                        </span>
                    </Col>
                </Row>

                <div className={aboutStyles.upToDiv}>
                    <h2>What I'm currently up to...</h2>
                    
                    <br />

                    <Row>
                        <Col lg={4}>
                            <h3>Getting that degree 🎓</h3>
                            <p>B.S. Computer Science<br />De La Salle University<br /><i>Graduating real soon!</i></p>
                        </Col>

                        <Col lg={4}>
                            <h3>Working at Shopee PH 🛍</h3>
                            <p>Business Intelligence Intern<br />Shopee Apprentice Program<br />June - August 2022</p>
                        </Col>

                        <Col lg={4}>
                            <h3>Writing at SLAM PH 🏀</h3>
                            <p>
                                <a href='https://slamonlineph.com/allow-the-warriors-to-reintroduce-themselves/' target='_blank' rel='noreferrer'>Allow the Dubs to Reintroduce Themselves</a><br />
                                <a href='https://slamonlineph.com/mark-nonoy-is-primed-to-retake-the-wheel/' target='_blank' rel='noreferrer'>Mark Nonoy is primed to retake the wheel</a><br />
                                <a href='https://slamonlineph.com/this-is-not-2021-nba-all-star-propaganda/?fbclid=IwAR0HJ4-8q7c-SCGuGVYwKvwiKxmjVet9c3nohMUoqAz0ZfE0M59DjtUT4f0' target='_blank' rel='noreferrer'>This is Not 2021 NBA All-Star Propaganda</a>
                            </p>
                        </Col>
                    </Row>
                </div>

                <div className={aboutStyles.inToDiv}>
                    <h2>What I'm currently in to...</h2>

                    <br />

                    <Row>
                        <Col lg={4}>
                            <h3>Media 📺</h3>
                            <p>One Punch Man<br /><i>Anime</i></p>
                            <p>Sex Education<br /><i>Comedy</i></p>
                            <p>Nevertheless<br /><i>K-Drama</i></p>
                        </Col>

                        <Col lg={4}>
                            <h3>Books 📚</h3>
                            <p>Anna Karenina<br /><i>Leo Tolstoy</i></p>
                            <p>The Republic<br /><i>Plato</i></p>
                            <p>The Picture of Dorian Gray<br /><i>Oscar Wilde</i></p>
                        </Col>

                        <Col lg={4}>
                            <h3>Music 🎶</h3>
                            <p>The Kiss of Venus<br /><i>Paul McCartney, Dominic Fike</i></p>
                            <p>zombie pop<br /><i>DPR IAN</i></p>
                            <p>Jail<br /><i>Kanye West, Jay-Z</i></p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default About;