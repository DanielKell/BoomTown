import React, { Component } from 'react';
import * as firebase from 'firebase';
import Login from './Login';
import { connect } from 'react-redux';

class LoginContainer extends Component {


//Firebase - DEAL WITH THIS
handleSubmit = async () => {
        //FIREBASE SETUP
        const {email, password} = this.props.user;
        try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        }
        catch(error) {
        console.log(error);
        };
    }


    static propTypes = {
    };

    login = () => {
        console.log('You clicked the login button.');
    }

    render() {
        return (
            <Login login={this.login} />
        );
    }
}

export default LoginContainer;
