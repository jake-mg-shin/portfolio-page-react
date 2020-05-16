import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Cover from './components/layout/Cover';
import Graph from './components/layout/Graph';
import About from './components/layout/About';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Cover />
            <Graph />
            <About />
        </div>
    );
};

export default App;
