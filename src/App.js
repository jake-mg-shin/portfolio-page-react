import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Cover from './components/layout/Cover';
import Graph from './components/layout/Graph';
import About from './components/layout/About';
import Projects from './components/layout/Projects';
import HireMe from './components/layout/HireMe';
import Footer from './components/layout/Footer';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Cover />
            <Graph />
            <About />
            <Projects />
            <HireMe />
            <Footer />
        </div>
    );
};

export default App;
