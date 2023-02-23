import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaTwitter } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

import Meta from '../components/Meta'; 

import homeStyles from '../assets/styles/Home.module.css';

const Home = () => {
    return (
        <div>
            <Meta title={'Home | Gabriel Minamedez'}
                  description={'On his off days, he loves to write about anything under the scorching sun.'}
                  title2={'Home'}
                  url={'https://gabminamedez.github.io/'}
            />

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
                                🇵🇭 Just another guy with glasses from Manila, PH
                                <br />
                                👨‍💻 Fullstack Web and Aspiring iOS Developer
                                <br />
                                ✍️ Semi-Professional Word Vomiter
                            </p>

                            <span className={homeStyles.socials}>
                                <a href='https://github.com/gabminamedez' target='_blank' className={homeStyles.social} rel='noreferrer'><FaGithub /></a>
                                <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={homeStyles.social} rel='noreferrer'><FaLinkedin /></a>
                                <a href='https://sansserif.substack.com/' target='_blank' className={homeStyles.social} rel='noreferrer'><SiSubstack /></a>
                                <a href='https://open.spotify.com/user/dirgfk4e07s0pggwbexjxmjbw?si=e0fe017022114a1e' target='_blank' className={homeStyles.social} rel='noreferrer'><FaSpotify /></a>
                                <a href='https://www.instagram.com/gabminamedez/' target='_blank' className={homeStyles.social} rel='noreferrer'><FaInstagram /></a>
                                <a href='https://twitter.com/GabMinamedez' target='_blank' className={homeStyles.social} rel='noreferrer'><FaTwitter /></a>
                            </span>
                        </Col>
                    </Row>
                </div>

                <div className={homeStyles.directory}>                    
                    <div className={homeStyles.directoryText}>
                        <h2><Link to='/about'>About</Link></h2>
                        <h2><Link to='/portfolio'>Portfolio</Link></h2>
                        <h2><a href='https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a></h2>
                        <h2><a href='https://sansserif.substack.com/' target='_blank' rel='noreferrer'>Blog</a></h2>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;