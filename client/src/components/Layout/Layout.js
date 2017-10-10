import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';


import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <Header />
        </div>
        <div className="appContent">
            {children}
        </div>
            
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
