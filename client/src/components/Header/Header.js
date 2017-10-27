import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

import FilterField from '../FilterField';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';
import logo from '../../images/boomtown-logo.svg';

const Header = () => {

    let location = window.location.href;
    
    return (
        
        <AppBar className= "app-bar" title="" style={{'background-color': 'white'}} iconElementLeft = { 
            <div className="logo-and-filter">
                <div>
                    <Link to="/">
                        <img className="header-logo" src={logo} alt="Boomtown Logo" />
                    </Link>
                </div>

                {location === "http://localhost:3000/" ?
                 <div className="filter-field">
                    <FilterField />
                  </div>
                : false
                }
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
                {/*<Link to="/login">*/}
                    <RaisedButton 
                        label="Logout" 
                        labelColor="white"
                        backgroundColor="black" 
                        onClick={() => firebase.auth().signOut()}
                    />
                {/*</Link>*/}
            </div>
            }>

        </AppBar>
    );

} 


export default Header;