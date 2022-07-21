import { Container, Row, Col } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import portfolioStyles from '../assets/styles/Portfolio.module.css';

const Portfolio = () => {  
    return (
        <div>
            <Container className={portfolioStyles.portfolio}>
                <h1>My Work</h1>
                <p>My pet projects as I continue to learn (and cry) everyday about new technologies.</p>

                <Tabs>
                    <TabList>
                        <Tab>Develop</Tab>
                        <Tab>Design</Tab>
                    </TabList>

                    <TabPanel>
                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>Dashboarding Project</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>Internship Project</b> developed with ReactJS.
                                    <br />
                                    Write-up coming soon
                                </p>

                                <p className={portfolioStyles.projectBio}>A dashboarding application specifically catered for FMCG companies aiming to improve performance through visualization of KPIs.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='../assets/images/portfolio/biomes2.png' alt='img' />
                            </Col>
                        </Row>

                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>Ingat.ph</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>University Project</b> developed with Flask and SQLite.
                                    <br />
                                    <a href='https://ingat-ph.herokuapp.com/' target='_blank' rel='noreferrer'>Application</a> • <a href='https://github.com/gabminamedez/DATA101-final' target='_blank' rel='noreferrer'>Github</a> • Write-up coming soon
                                </p>

                                <p className={portfolioStyles.projectBio}>A visualization application that displays and interprets 2020 data on traffic incidents in the Philippines' capital region.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='../assets/images/portfolio/ingat.png' alt='img' />
                            </Col>
                        </Row>

                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>Philippine Population Data</h2>
                                
                                <p className={portfolioStyles.metadata}>
                                    <b>Personal Project</b> developed with ReactJS.
                                    <br />
                                    <a href='https://github.com/gabminamedez/react-viz-exercise' target='_blank' rel='noreferrer'>Github</a> • Write-up coming soon
                                </p>

                                <p className={portfolioStyles.projectBio}>A configurable visualization application that displays Philippine population data.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='../assets/images/portfolio/ph_popn.png' alt='img' />
                            </Col>
                        </Row>

                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>Cache Replacement Algorithm Simulator</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>University Project</b> developed with Node.js and MySQL.
                                    <br />
                                    <a href='https://falru-simulator.herokuapp.com/' target='_blank' rel='noreferrer'>Application</a> • <a href='https://github.com/gabminamedez/fa-lru-cache-simulator' target='_blank' rel='noreferrer'>Github</a>
                                </p>

                                <p className={portfolioStyles.projectBio}>A web application that simulates the cache replacement algorithm of full associative mapping (LRU).</p>
                            </Col>

                            <Col lg={6}>
                                <img src='https://slidetodoc.com/presentation_image_h/f150169326bf514299360a07d20e03c1/image-21.jpg' alt='img' />
                            </Col>
                        </Row>

                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>OLAP Querying of AirBnB NYC Data</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>University Project</b> developed with Node.js, MySQL, and Python.
                                    <br />
                                    <a href='https://stadvdb-mco2.herokuapp.com/' target='_blank' rel='noreferrer'>Application</a> • <a href='https://github.com/gabminamedez/STADVDB_S12.2_T120-21_MCO2' target='_blank' rel='noreferrer'>Github</a>
                                </p>

                                <p className={portfolioStyles.projectBio}>A web application that aggregates and returns AirBnB data of New York City based on OLAP queries.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='https://static.onecms.io/wp-content/uploads/sites/28/2021/02/19/new-york-city-evening-NYCTG0221.jpg' alt='img' />
                            </Col>
                        </Row>

                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>Database Querying of AirBnB NYC Data</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>University Project</b> developed with Node.js and MySQL.
                                    <br />
                                    <a href='https://stadvdb-mco1.herokuapp.com/' target='_blank' rel='noreferrer'>Application</a> • <a href='https://github.com/gabminamedez/STADVDB_S12.2_T120-21' target='_blank' rel='noreferrer'>Github</a>
                                </p>

                                <p className={portfolioStyles.projectBio}>A web application that aggregates and returns AirBnB data of New York City.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='https://www.planetware.com/wpimages/2020/06/new-york-new-york-city-best-time-to-visit-best-time-to-visit-new-york-city.jpg' alt='img' />
                            </Col>
                        </Row>

                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>Eye Spy</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>Personal Project</b> developed with Python (OpenCV, TensorFlow).
                                    <br />
                                    <a href='https://github.com/gabminamedez/eye-spy' target='_blank' rel='noreferrer'>Github</a> • Write-up coming soon
                                </p>

                                <p className={portfolioStyles.projectBio}>A face liveliness detection project that takes in video feed as input and provides live feedback on whether or not a subject's eyes are open.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='https://teknosejahtera.com/wp-content/uploads/2020/12/Start-Up-Ep-1-Nam-Joohyuk.png' alt='img' />
                            </Col>
                        </Row>

                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>More than Meets the Ear: The Data Behind Spotify</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>University Project</b> developed with Python (Pandas, Matplotlib, Seaborn).
                                    <br />
                                    <a href='https://github.com/gabminamedez/spotify-data' target='_blank' rel='noreferrer'>Github</a> • Write-up coming soon
                                </p>

                                <p className={portfolioStyles.projectBio}>An exploratory analysis of the data on Spotify tracks from 1921-2020.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='https://miro.medium.com/max/2400/1*BKoo1Q5PBuN87XT4bArK3w.jpeg' alt='img' />
                            </Col>
                        </Row>

                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>DLSU Usap</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>University Project</b> developed with Java (Java.io, Java Swing).
                                    <br />
                                    <a href='https://github.com/gabminamedez/dlsu-usap' target='_blank' rel='noreferrer'>Github</a>
                                </p>

                                <p className={portfolioStyles.projectBio}>A chat application that allows clients to send and receive messages and files through a server implemented with socket programming.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='../assets/images/portfolio/dlsu_usap.png' alt='img' />
                            </Col>
                        </Row>

                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>Python Sudoku</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>Personal Project</b> developed with Python (PyGame).
                                    <br />
                                    <a href='https://github.com/gabminamedez/python-sudoku' target='_blank' rel='noreferrer'>Github</a>
                                </p>

                                <p className={portfolioStyles.projectBio}>A Pythonized version of the classic Japanese puzzle Sudoku.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png' alt='img' />
                            </Col>
                        </Row>
                    </TabPanel>
                    
                    <TabPanel>
                        <Row className={portfolioStyles.project}>
                            <Col lg={6}>
                                <h2>Easel</h2>

                                <p className={portfolioStyles.metadata}>
                                    <b>University Project</b> prototyped with Figma.
                                    <br />
                                    <a href='https://www.figma.com/proto/jI8cYXoMXzEWGkONvg8sM2/STHCIUX-Prototypes?node-id=293%3A397&scaling=scale-down' target='_blank' rel='noreferrer'>Figma</a>
                                </p>

                                <p className={portfolioStyles.projectBio}>A Figma prototype that improves and caters the online classroom platform Canvas for students with eye problems.</p>
                            </Col>

                            <Col lg={6}>
                                <img src='../assets/images/portfolio/easel.png' alt='img' />
                            </Col>
                        </Row>
                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    );
}

export default Portfolio;