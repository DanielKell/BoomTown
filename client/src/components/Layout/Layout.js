import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Items from '../../containers/Items/Items';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <Header />
            
        </div>
        <div className="appContent">
            {children}
            <Items />
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
