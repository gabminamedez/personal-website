import { Container, Row, Col } from 'reactstrap';

import Head from '../components/Head';

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
                        <h2>Biomes USA</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='/img/portfolio/biomes2.png' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Ingat.ph</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='/img/portfolio/ingat.png' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Philippine Population Data</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='/img/home/portfolio.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Weekday</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='/img/home/portfolio.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Easel</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='/img/home/portfolio.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Cache Replacement Algorithm Simulator</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='https://slidetodoc.com/presentation_image_h/f150169326bf514299360a07d20e03c1/image-21.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>OLAP Querying of AirBnB NYC Data</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='https://static.onecms.io/wp-content/uploads/sites/28/2021/02/19/new-york-city-evening-NYCTG0221.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Database Querying of AirBnB NYC Data</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='https://www.planetware.com/wpimages/2020/06/new-york-new-york-city-best-time-to-visit-best-time-to-visit-new-york-city.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Eye Spy</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='/img/home/portfolio.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>More than Meets the Ear: The Data Behind Spotify</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='https://miro.medium.com/max/2400/1*BKoo1Q5PBuN87XT4bArK3w.jpeg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>DLSU Usap</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='/img/home/portfolio.jpg' />
                    </Col>
                </Row>

                <Row className={portfolioStyles.project}>
                    <Col lg={6}>
                        <h2>Python Sudoku</h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;