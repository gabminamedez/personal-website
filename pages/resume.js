import { Container, Row, Col } from 'reactstrap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import Head from '../components/Head';

import resumeStyles from '../styles/resume.module.css';

const Resume = () => {

    return (
        <div>
            <Head title={'Gab Minamedez | Resume'} />
            
            <Container className={resumeStyles.resume}>
                <Row>
                    <Col lg={3}>
                        <img className={resumeStyles.dpImage} src='/img/home/dp.jpg' />
                    </Col>

                    <Col lg={9} className={resumeStyles.resumeHead}>
                        <h1>Gabriel Nicolas D. Minamedez</h1>
                        <span>
                            <a href='mailto:gabminamedez@gmail.com' target='_blank' className={resumeStyles.social}><FaEnvelope /></a>
                            <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={resumeStyles.social}><FaLinkedin /></a>
                            <a href='https://github.com/gabminamedez' target='_blank' className={resumeStyles.social}><FaGithub /></a>
                        </span>
                        <p>You can download a copy of my resume <a href='https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing' target='_blank'>here</a>!</p>
                    </Col>
                </Row>

                <h2>Education</h2>

                <hr />

                <h2>Professional Experience</h2>

                <hr />

                <h2>Leadership Experience</h2>

                <hr />
            </Container>
        </div>
    );
}

export default Resume;