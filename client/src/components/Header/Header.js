import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import { connect } from 'react-redux';

import FilterField from '../FilterField';
import { filterTags } from '../../redux/modules/tags';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';
import logo from '../../images/boomtown-logo.svg';

const Header = ({ dispatch, tags, auth}) => {

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
                    <FilterField dispatch={dispatch} handleChange={filterTags} tags={tags} />
                    
                  </div>
                : false
                }
            </div>
            } 

            iconElementRight = {
            <div className="header-buttons">
                {auth.user ? 
                <Link to={`/profile/${auth.user.uid}`}>
                    <RaisedButton className="profile-button"
                        label="My Profile"
                        primary={true}
                    /> 
                </Link>
                : null
                }
                    <RaisedButton 
                        label="Logout" 
                        labelColor="white"
                        backgroundColor="black" 
                        onClick={() => firebase.auth().signOut()}
                    />
            </div>
            }>
        </AppBar>
    );
} 

const mapStateToProps = state => ({
    tags: state.tags.tagData,
    auth: state.auth
});

export default connect(mapStateToProps)(Header);
