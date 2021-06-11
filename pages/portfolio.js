import { Container, Row, Col } from 'reactstrap';

import Head from '../components/Head';

import portfolioStyles from '../styles/portfolio.module.css';

const Portfolio = () => {
    return (
        <div>
            <Head title={'Gab Minamedez | Portfolio'} />

            <Container className={portfolioStyles.portfolio}>
                <h1>My Work</h1>
            </Container>
        </div>
    );
}

export default Portfolio;