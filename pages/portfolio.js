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
                        <h2><a href=''>Title</a></h2>
                        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                    </Col>

                    <Col lg={6}>
                        <img src='/img/home/portfolio.jpg' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;