import React, { Component } from 'react';
import * as firebase from 'firebase';
import Login from './Login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LoginContainer extends Component {

handleSubmit = async (e) => {

        e.preventDefault();
        const {email, password} = this.props.values.LoginForm.values;
        //THIS WORKS, but you MUST enter stuff into the email/password boxes.
        try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        }
        catch(error) {
        console.log(error);
    };
}

    static propTypes = {
    };

    render() {
        
        if (this.props.auth.user !== null) {
            return (
                <Redirect to={"/"} />
            );
        }

        return (
            <Login handleSubmit={this.handleSubmit} email={this.email} password={this.password}/>
        );
    }
}

const mapStateToProps = state => ({
    values: state.form,
    auth: state.auth
});

export default connect(mapStateToProps)(LoginContainer);