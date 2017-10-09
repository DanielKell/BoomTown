import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import theme from '../../config/theme.js';
import './styles.css';

const Loader = () => (
    <div className="loader-container">
        <CircularProgress color={theme.palette.alternateTextColor} size={60}/>
    </div>
)

export default Loader;


