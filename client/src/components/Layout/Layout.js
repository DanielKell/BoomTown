import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Items from '../../containers/Items/Items';
import Routes from '../../routes/Routes';
// import NotFound from '../../containers/NotFound/NotFound';
// import Profile from '../../containers/Profile/Profile';
// import Share from '../../containers/Share/Share';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <Header />
        </div>
        <div className="appContent">
            <Router>
                <Routes />
            </Router>
            {/*<Items />*/}
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
