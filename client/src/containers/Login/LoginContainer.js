import React, { Component } from 'react';
import * as firebase from 'firebase';
import Login from './Login';
import { connect } from 'react-redux';

class LoginContainer extends Component {

//Firebase - DEAL WITH THIS. Need to connect to the button in 'Login' to fire this request. Also need to hook up redux forms.
handleSubmit = async () => {
        //FIREBASE SETUP
        console.log('FIREBASE ATTEMPT')
        // const {email, password} = this.props.user;
        try {
        await firebase.auth().signInWithEmailAndPassword('test@test.com', 'testtest');
        // await firebase.auth().signInWithEmailAndPassword(email, password);
        }
        catch(error) {
        console.log(error);
        };
    }

    static propTypes = {
    };

    // login = () => {
    //     console.log('You clicked the login button.');
    // }

    render() {
        return (
            <Login handleSubmit={this.handleSubmit} />
        );
    }
}

export default LoginContainer;
