import React, { Component } from 'react';

import './styles.css';
import ohDeer from '../../images/Oh_Deer.svg';

class NotFound extends Component {

    render() {
        return (
            <div className="not-found-container">
                <img className="not-found-svg" src={ohDeer} />
                <h2 className="not-found-text">Unfortunately you are lost! Please try somewhere else</h2>
            </div>
        );
    }
}

export default NotFound;