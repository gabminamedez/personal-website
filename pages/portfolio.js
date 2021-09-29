import { useState } from 'react';
import { Container } from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Head from '../components/Head';
import AsyncImage from '../components/AsyncImage';

import portfolioStyles from '../styles/portfolio.module.css';

const Portfolio = () => {  
    return (
        <div>
            <Head title={'Portfolio | Gab Minamedez'}
                  description={'Gabriel Minamedez. Gab is a senior Computer Science student in De La Salle University in the Philippines. He is an aspiring web and iOS developer. This is a collection of his pet projects developed as he continues to learn about new technologies everyday. © 2021 Gabriel Minamedez.'}
                  title2={'Portfolio'}
                  url={'https://gabminamedez.github.io/portfolio'}
            />

            <Container className={portfolioStyles.portfolio}>
                <h1>My Work</h1>
                <p>My pet projects as I continue to learn (and cry) everyday about new technologies.</p>

                <Tabs>
                    <TabList>
                        <Tab>Develop</Tab>
                        <Tab>Design</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    );
}

export default Portfolio;