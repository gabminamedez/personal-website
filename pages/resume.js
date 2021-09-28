import { Container, Row, Col } from 'reactstrap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import Head from '../components/Head';
import AsyncImage from '../components/AsyncImage';

import resumeStyles from '../styles/resume.module.css';

const Resume = () => {
    return (
        <div>
            <Head title={'Resume | Gab Minamedez'}
                  description={'Gabriel Minamedez. Gab is a senior Computer Science student in De La Salle University in the Philippines. He is an aspiring web and iOS developer. © 2021 Gabriel Minamedez.'}
                  title2={'Resume'}
                  url={'https://gabminamedez.github.io/resume'}
            />
            
            <Container className={resumeStyles.resume}>
                <Row className={resumeStyles.resumeFirst}>
                    <Col lg={3}>
                        <AsyncImage className={resumeStyles.dpImage} src='/img/home/dp.jpg' />
                    </Col>

                    <Col lg={9} className={resumeStyles.resumeHead}>
                        <h1>Gabriel Nicolas D. Minamedez</h1>
                        <span>
                            <a href='mailto:gabminamedez@gmail.com' target='_blank' className={resumeStyles.social}><FaEnvelope /></a>
                            <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={resumeStyles.social}><FaLinkedin /></a>
                            <a href='https://github.com/gabminamedez' target='_blank' className={resumeStyles.social}><FaGithub /></a>
                        </span>
                        <p>Download a copy of my resume <a href='https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing' target='_blank' className={resumeStyles.downloadLink}>here</a> or my CV <a href='https://docs.google.com/document/d/1PbrYk6pyCctUnmxQBSCNlGvPVs4bQnhbdOq7ceo9He8/edit?usp=sharing' target='_blank' className={resumeStyles.downloadLink}>here</a>.</p>
                    </Col>
                </Row>

                <h2>🎓 Education</h2>
                <hr />
                <Container className={resumeStyles.sectionContent}>
                    <h3>M.S. in Computer Science</h3>
                    <i>De La Salle University - Manila, 2021 - present</i>

                    <h3>B.S. in Computer Science, Major in Software Technology</h3>
                    <i>De La Salle University - Manila, 2018 - present</i>
                    <ul>
                        <li>Thesis: Simulation of Social Interactions in Public Spaces<br />Advisor: Dr. Briane Samson</li>
                    </ul>
                </Container>

                <h2>🔨 Technical Skills and Relevant Coursework</h2>
                <hr />
                <Container className={resumeStyles.sectionContent}>
                    <Row>
                        <Col lg={6}>
                            <h3>Concepts</h3>
                            <p>Data science, web development, web design, UI/UX design, machine learning, android development</p>
                        </Col>

                        <Col lg={6}>
                            <h3>Languages</h3>
                            <p>Python, Java, C, C++, Swift, HTML, CSS, JavaScript, MySQL, PostgreSQL, MongoDB</p>
                        </Col>
                        
                        <Col lg={6}>
                            <h3>Frameworks</h3>
                            <p>ReactJS, Vue, Node, Express, Django, Flask, Pandas, OpenCV, TensorFlow, TKinter, JavaFX, Java Swing</p>
                        </Col>

                        <Col lg={6}>
                            <h3>DevOps and Tools</h3>
                            <p>Git, Github, Github Actions, Heroku, Travis, Agile and Scrum methodologies</p>
                        </Col>

                        <Col lg={6}>
                            <h3>Software</h3>
                            <p>Microsoft Office, Adobe Suite, Figma, Trello, Notion, Wordpress</p>
                        </Col>
                    </Row>
                </Container>

                <h2>👔 Professional Experience</h2>
                <hr />
                <Container className={resumeStyles.sectionContent}>
                    <h3>Cobena Business Analytics and Strategy Inc.</h3>
                    <i>Frontend Development Intern, February 2021 - June 2021</i>

                    <h3>SLAM Philippines</h3>
                    <i>Staff Writer, March 2020 - present</i>
                </Container>

                <h2>👥 Leadership Experience</h2>
                <hr />
                <Container className={resumeStyles.sectionContent}>
                    <h3>DLSU Center for Complexity and Emerging Technologies</h3>
                    <i>Cohort Member, August 2020 - present</i>

                    <h3>The Lasallian</h3>
                    <i>Sports Writer, March 2020 - December 2020</i>

                    <h3>Google Developer Student Club Taft</h3>
                    <i>Activities Executive, October 2019 - August 2020</i>

                    <h3>DLSU Computer Studies Government</h3>
                    <i>Policy Research Chairperson, September 2019 - August 2020</i>

                    <h3>DLSU University Student Government</h3>
                    <i>Legislative Assembly Representative, January 2019 - August 2019</i>

                    <h3>DLSU Microsoft Student Community</h3>
                    <i> Secretariat Executive, October 2018 - August 2019</i>
                </Container>
            </Container>
        </div>
    );
}

export default Resume;