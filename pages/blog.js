import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
var moment = require('moment');

import Head from '../components/Head';

import blogStyles from '../styles/blog.module.css';

const Blog = () => {
    const [mediumData, setMediumData] = useState([]);

    useEffect(() => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gabminamedez`)
        .then(res => res.json())
        .then(response => {
                setMediumData(response.items);
            })
            .catch(err => console.log(err));
    }, []);

      
    return (
        <div>
            <Head title={'Gab Minamedez | Blog'} />

            <Container className={blogStyles.blog}>
                <h1>Blog</h1>
                <p>I vomit my words over at <a href='https://gabminamedez.medium.com/' target='_blank' className={blogStyles.mediumLink}>my Medium blog</a> and embed them here for convenience.</p>

                <hr />

                {
                    mediumData.map(article => (
                        <Row className={blogStyles.article} key={article.guid}>
                            <Col lg={6}>
                                <h2><a href={article.link} target='_blank'>{article.title}</a></h2>
                                <p><i>Published {moment(article.pubDate).format('dddd, MMMM Do YYYY')}</i></p>
                            </Col>

                            <Col lg={6}>
                                <img src={article.thumbnail} />
                            </Col>
                        </Row>
                    ))
                }
            </Container>
        </div>
    );
}

export default Blog;