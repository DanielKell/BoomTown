import React from 'react';
import AppBar from 'material-ui/AppBar';
import FilterField from '../SelectField/SelectField';

import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';
import logo from '../../images/boomtown-logo.svg';

const Header = () => {

    return (
        <AppBar className= "app-bar" title="" style={{'background-color': 'white'}} iconElementLeft = { 
            <div className="logo-and-filter">
                <div>
                    <img className="logo" src={logo} alt="Boomtown Logo" />
                </div>

                <div>
                    <FilterField />
                </div>
            </div>
            } 
            
            iconElementRight = {
            <div className="header-buttons">
                <RaisedButton 
                    label="My Profile"
                    primary={true}
                /> 

                <RaisedButton 
                    label="Logout" 
                    labelColor="white"
                    backgroundColor="black" 
                />
            </div>
            }>

        </AppBar>
    );

} 


export default Header;