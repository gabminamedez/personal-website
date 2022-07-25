import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { coding } from '../assets/data/pfDevelop';

import portfolioStyles from '../assets/styles/Portfolio.module.css';

const Portfolio = () => {  
    const [selected, setSelected] = useState('develop');

    return (
        <div>
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
                    {
                        coding.map((item) => {
                            if (item.url) {
                                return (<Col lg={6}>
                                            <div className={portfolioStyles.project}>
                                                <a href={ item.url } target='_blank' rel='noreferrer'><h2>{ item.title }</h2></a>
                                                <p className={portfolioStyles.metadata}><b>{ item.type } Project</b> developed with { item.stack }. <br />
                                                    <span className={portfolioStyles.projectBio}>{ item.bio }</span>
                                                </p>
                                                <img src={ item.img } alt='img' />
                                            </div>
                                        </Col>)
                            }
                            else {
                                return (<Col lg={6}>
                                            <div className={portfolioStyles.project}>
                                                <h2>{ item.title }</h2>
                                                <p className={portfolioStyles.metadata}><b>{ item.type } Project</b> developed with { item.stack }. <br />
                                                    <span className={portfolioStyles.projectBio}>{ item.bio }</span>
                                                </p>
                                                <img src={ item.img } alt='img' />
                                            </div>
                                        </Col>)
                            }
                        })
                    }
                </Row>

                        {/* 
                    
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
                        </Row> */}
            </Container>
        </div>
    );
}

export default Portfolio;