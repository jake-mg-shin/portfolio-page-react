import React from 'react';
import './App.css';
import ScrollToTop from 'react-scroll-up';

import Navbar from './components/layout/Navbar';
import Cover from './components/layout/Cover';
import Graph from './components/layout/Graph';
import About from './components/layout/About';
import Projects from './components/layout/Projects';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';

const App = () => {
    return (
        <div className='App'>
            <ScrollToTop showUnder={160} style={{ zIndex: '100' }}>
                <span>
                    <i
                        className='fas fa-angle-double-up fa-4x'
                        style={{ color: 'var(--clr-danger)', opacity: '0.6' }}
                    ></i>
                    <br />
                    <div
                        style={{
                            textAlign: 'center',
                            color: 'var(--clr-danger)',
                            opacity: '0.6',
                        }}
                    >
                        Top
                    </div>
                </span>
            </ScrollToTop>
            <Navbar />
            <Cover />
            <Graph />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
