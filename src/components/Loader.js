import React from 'react';
import '../stylesheets/loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-wrapper">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Loader;