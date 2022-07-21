import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

import Brand from './components/Brand';
import MenuButton from './components/MenuButton';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <div className='layout'>
                <Brand />
                <MenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
                <Animated animationIn='slideInDown' animationOut='slideOutUp' animationInDuration={400} animationOutDuration={400} isVisible={isOpen} className='menu'>
                    <div className='menu'>
                        <div className='menuContent'>
                            <h1><Link to='/about'>About</Link></h1>
                            <h1><Link to='/portfolio'>Portfolio</Link></h1>
                            <h1><a href='https://docs.google.com/document/d/1hBoGjn5_nk3u8RZsyqLoIxgU3-SGNnyrWp3ZVydAp_M/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a></h1>
                            <h1><a href='https://gabminamedez.medium.com/' target='_blank' rel='noreferrer'>Blog</a></h1>
                        </div>
                    </div>
                </Animated>

                <div className='children'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                    </Routes>
                </div>
            </div>
            
            <Footer />
        </Router>
    );
}

export default App;