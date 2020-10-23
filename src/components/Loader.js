import React from 'react';
import '../styles/Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader_ball ball1"></div>
            <div className="loader_ball ball2"></div>
            <div className="loader_ball ball3"></div>
        </div>
    );
}

export default Loader;