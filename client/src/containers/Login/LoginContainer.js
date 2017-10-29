import React, { Component } from 'react';
import * as firebase from 'firebase';
import Login from './Login';
import { connect } from 'react-redux';

class LoginContainer extends Component {

//Firebase - DEAL WITH THIS. Need to connect to the button in 'Login' to fire this request. Also need to hook up redux forms.
handleSubmit = async (e) => {

        //FIREBASE SETUP
        const {email, password} = this.props.values.LoginForm.values;
        //THIS WORKS, but you MUST enter stuff into the email/password boxes. Need to put validation checks! And maybe preventDefault
        try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
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
            <Login handleSubmit={this.handleSubmit} email={this.email} password={this.password}/>
        );
    }
}

// export default LoginContainer;

const mapStateToProps = state => ({
    values: state.form,
    auth: state.auth
});

export default connect(mapStateToProps)(LoginContainer);



//This is used to submit dummy data to the server
    //     firebase.auth().createUserWithEmailAndPassword("mac@email.com", "redredred")
    //     .then((user) => firebase.database().ref(`users/${user.uid}`)
    //     .set({
    //         email: "mac@email.com",
    //         fullName: "Mackenzie Keiran",
    //         bio: "I teach devs to be less bad"
    //     }));
    // }