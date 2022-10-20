import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Meta from '../components/Meta'; 
import { develop } from '../assets/data/pfDevelop';
import { design } from '../assets/data/pfDesign';
import { photography } from '../assets/data/pfPhotography';
import sansserif from '../assets/images/portfolio/sansserif.png';

import portfolioStyles from '../assets/styles/Portfolio.module.css';

const Portfolio = () => {  
    const [selected, setSelected] = useState('develop');

    return (
        <div>
            <Meta title={'Portfolio | Gabriel Minamedez'}
                  description={'This is a collection of his pet projects developed as he continues to learn about new technologies everyday.'}
                  title2={'Portfolio'}
                  url={'https://gabminamedez.github.io/portfolio'}
            />

            <Container className={portfolioStyles.portfolio}>
                <div className={portfolioStyles.fixed}>
                    <h1>My Work</h1>
                    <p>My pet projects as I continue to learn and create (and cry) everyday about stuff ranging from technological to creative endeavors.</p>
                    <h4>
                        <span className={selected === 'develop' && portfolioStyles.selected} onClick={(e) => setSelected('develop')}>Develop</span> /
                        <span className={selected === 'design' && portfolioStyles.selected} onClick={(e) => setSelected('design')}> Design</span> /
                        <span className={selected === 'writing' && portfolioStyles.selected} onClick={(e) => setSelected('writing')}> Writing</span> /
                        <span className={selected === 'photography' && portfolioStyles.selected} onClick={(e) => setSelected('photography')}> Photography</span>
                    </h4>
                </div>

                <Row className={portfolioStyles.projects}>
                    {   selected === 'develop' && develop.map((item) => {
                            return (<Col lg={6}>
                                        <div className={portfolioStyles.project}>
                                            <a href={ item.url } target='_blank' rel='noreferrer'><h2>{ item.title }</h2></a>
                                            <p className={portfolioStyles.metadata}><b>{ item.type } Project</b> developed with { item.stack }. <br />
                                                <span className={portfolioStyles.projectBio}>{ item.bio }</span>
                                            </p>
                                            <img src={ item.img } alt='img' />
                                        </div>
                                    </Col>)
                    }) }
                    {   selected === 'design' && design.map((item) => {
                            return (<Col lg={6}>
                                        <div className={portfolioStyles.project}>
                                            <a href={ item.url } target='_blank' rel='noreferrer'><h2>{ item.title }</h2></a>
                                            <p className={portfolioStyles.metadata}><b>{ item.type } Project</b> developed with { item.stack }. <br />
                                                <span className={portfolioStyles.projectBio}>{ item.bio }</span>
                                            </p>
                                            <img src={ item.img } alt='img' />
                                        </div>
                                    </Col>)
                    }) }
                    {   selected === 'writing' &&
                            <Col lg={6}>
                                <div className={portfolioStyles.project}>
                                    <a href='https://sansserif.substack.com/' target='_blank' rel='noreferrer'><h2>Subscribe to Sans Serif!</h2></a>
                                    <p className={portfolioStyles.metadata}>A trail of word vomits to navigate this beautiful, twisted, modern existence that I attempt to make sense of.</p>
                                    <img src={ sansserif } alt='img' />
                                </div>
                            </Col>
                    }
                    {   selected === 'photography' && photography && photography.map((item) => {
                            return (<Col lg={6}>
                                        <div className={portfolioStyles.project}>
                                            <a href={ item.url } target='_blank' rel='noreferrer'><h2>{ item.title }</h2></a>
                                            <img src={ item.img } alt='img' />
                                        </div>
                                    </Col>)
                    }) }
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;