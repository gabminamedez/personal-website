import { Container, Row, Col } from 'reactstrap';

import Head from '../components/Head';
import AsyncImage from '../components/AsyncImage';

import portfolioStyles from '../styles/portfolio.module.css';

const Portfolio = () => {      
    return (
        <div>
            <Head title={'Gab Minamedez | Portfolio'} />

            <Container className={portfolioStyles.portfolio}>
                <h1>My Work</h1>
                <p>My pet coding projects as I continue to learn (and cry) everyday about new technologies.</p>

                <hr />

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
                        <AsyncImage src='/img/portfolio/biomes2.png' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Ingat.ph</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>University Project</b> developed with Flask and SQLite.
                            <br />
                            <a href='https://ingat-ph.herokuapp.com/' target='_blank'>Application</a> • <a href='https://github.com/gabminamedez/DATA101-final' target='_blank'>Github</a> • Write-up coming soon
                        </p>

                        <p className={portfolioStyles.projectBio}>A visualization application that displays and interprets 2020 data on traffic incidents in the Philippines' capital region.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='/img/portfolio/ingat.png' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Philippine Population Data</h2>
                        
                        <p className={portfolioStyles.metadata}>
                            <b>Personal Project</b> developed with ReactJS.
                            <br />
                            <a href='https://github.com/gabminamedez/react-viz-exercise' target='_blank'>Github</a> • Write-up coming soon
                        </p>

                        <p className={portfolioStyles.projectBio}>A configurable visualization application that displays Philippine population data.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='/img/portfolio/ph_popn.png' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Weekday</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>Personal Project</b> developed with ReactJS.
                            <br />
                            <a href='https://github.com/gabminamedez/weekday' target='_blank'>Github</a>
                        </p>

                        <p className={portfolioStyles.projectBio}>A Kanban board mockup that functions as a compunded to-do list.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='/img/portfolio/weekday.png' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Easel</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>University Project</b> prototyped with Figma.
                            <br />
                            <a href='https://www.figma.com/proto/jI8cYXoMXzEWGkONvg8sM2/STHCIUX-Prototypes?node-id=293%3A397&scaling=scale-down' target='_blank'>Figma</a>
                        </p>

                        <p className={portfolioStyles.projectBio}>A Figma prototype that improves and caters the online classroom platform Canvas for students with eye problems.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='/img/portfolio/easel.png' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Cache Replacement Algorithm Simulator</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>University Project</b> developed with Node.js and MySQL.
                            <br />
                            <a href='https://falru-simulator.herokuapp.com/' target='_blank'>Application</a> • <a href='https://github.com/gabminamedez/fa-lru-cache-simulator' target='_blank'>Github</a>
                        </p>

                        <p className={portfolioStyles.projectBio}>A web application that simulates the cache replacement algorithm of full associative mapping (LRU).</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='https://slidetodoc.com/presentation_image_h/f150169326bf514299360a07d20e03c1/image-21.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>OLAP Querying of AirBnB NYC Data</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>University Project</b> developed with Node.js, MySQL, and Python.
                            <br />
                            <a href='https://stadvdb-mco2.herokuapp.com/' target='_blank'>Application</a> • <a href='https://github.com/gabminamedez/STADVDB_S12.2_T120-21_MCO2' target='_blank'>Github</a>
                        </p>

                        <p className={portfolioStyles.projectBio}>A web application that aggregates and returns AirBnB data of New York City based on OLAP queries.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='https://static.onecms.io/wp-content/uploads/sites/28/2021/02/19/new-york-city-evening-NYCTG0221.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Database Querying of AirBnB NYC Data</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>University Project</b> developed with Node.js and MySQL.
                            <br />
                            <a href='https://stadvdb-mco1.herokuapp.com/' target='_blank'>Application</a> • <a href='https://github.com/gabminamedez/STADVDB_S12.2_T120-21' target='_blank'>Github</a>
                        </p>

                        <p className={portfolioStyles.projectBio}>A web application that aggregates and returns AirBnB data of New York City.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='https://www.planetware.com/wpimages/2020/06/new-york-new-york-city-best-time-to-visit-best-time-to-visit-new-york-city.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Eye Spy</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>Personal Project</b> developed with Python (OpenCV, TensorFlow).
                            <br />
                            <a href='https://github.com/gabminamedez/eye-spy' target='_blank'>Github</a> • Write-up coming soon
                        </p>

                        <p className={portfolioStyles.projectBio}>A face liveliness detection project that takes in video feed as input and provides live feedback on whether or not a subject's eyes are open.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='https://teknosejahtera.com/wp-content/uploads/2020/12/Start-Up-Ep-1-Nam-Joohyuk.png' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>More than Meets the Ear: The Data Behind Spotify</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>University Project</b> developed with Python (Pandas, Matplotlib, Seaborn).
                            <br />
                            <a href='https://github.com/gabminamedez/spotify-data' target='_blank'>Github</a> • Write-up coming soon
                        </p>

                        <p className={portfolioStyles.projectBio}>An exploratory analysis of the data on Spotify tracks from 1921-2020.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='https://miro.medium.com/max/2400/1*BKoo1Q5PBuN87XT4bArK3w.jpeg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>DLSU Usap</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>University Project</b> developed with Java (Java.io, Java Swing).
                            <br />
                            <a href='https://github.com/gabminamedez/dlsu-usap' target='_blank'>Github</a>
                        </p>

                        <p className={portfolioStyles.projectBio}>A chat application that allows clients to send and receive messages and files through a server implemented with socket programming.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='/img/portfolio/dlsu_usap.png' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Python Sudoku</h2>

                        <p className={portfolioStyles.metadata}>
                            <b>Personal Project</b> developed with Python (PyGame).
                            <br />
                            <a href='https://github.com/gabminamedez/python-sudoku' target='_blank'>Github</a>
                        </p>

                        <p className={portfolioStyles.projectBio}>A Pythonized version of the classic Japanese puzzle Sudoku.</p>
                    </Col>

                    <Col lg={6}>
                        <AsyncImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;