import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

import FilterField from '../FilterField/FilterField';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';
import logo from '../../images/boomtown-logo.svg';

const Header = () => {

    return (
        <AppBar className= "app-bar" title="" style={{'background-color': 'white'}} iconElementLeft = { 
            <div className="logo-and-filter">
                <div>
                    <Link to="/">
                        <img className="header-logo" src={logo} alt="Boomtown Logo" />
                    </Link>
                </div>

                <div className="filter-field">
                    <FilterField 
                    />
                </div>
            </div>
            } 
            
            iconElementRight = {
            <div className="header-buttons">
                <Link to="/profile/LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2">
                    <RaisedButton className="profile-button"
                        label="My Profile"
                        primary={true}
                    /> 
                </Link>
                <Link to="/login">
                    <RaisedButton 
                        label="Logout" 
                        labelColor="white"
                        backgroundColor="black" 
                    />
                </Link>
            </div>
            }>

        </AppBar>
    );

} 


export default Header;