import { Container } from 'reactstrap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import Head from '../components/Head';

import resumeStyles from '../styles/resume.module.css';

const Resume = () => {

    return (
        <div>
            <Head title={'Gab Minamedez | Resume'} />
            
            <Container className={resumeStyles.resume}>
                <h1>Gabriel Nicolas D. Minamedez</h1>
                <a href='mailto:gabminamedez@gmail.com' target='_blank' className={resumeStyles.social}><FaEnvelope /></a>
                <a href='https://www.linkedin.com/in/gabminamedez/' target='_blank' className={resumeStyles.social}><FaLinkedin /></a>
                <a href='https://github.com/gabminamedez' target='_blank' className={resumeStyles.social}><FaGithub /></a>

                <hr />

                <p>You can download a copy of my resume here!</p>

                <hr />
            </Container>
        </div>
    );
}

export default Resume;