import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import './styles.css';
import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';
import {usernameInput, passwordInput} from './loginInput';

const validate = values => {
    const errors = {};
    const requiredFields = ['email', 'password'];
    requiredFields.forEach(field => {
        if (!values[field]) { errors[field] = 'Please fill out this field'; }
    });
    return errors; //This doesn't seem to prevent form submittal yet
}

const Login = ({ handleSubmit, email, password }) => {

    return (

    <div className="page login">
        <div className="logo">
            <img src={logo} alt="Boomtown Logo" />
        </div>
        <div className="topRight">
            <img src={topRight} alt="Sky" />
        </div>
        <div className="bottomLeft">
            <img src={bottomLeft} alt="City" />
        </div>
        <div className="cardContainer">
            <Paper zDepth={5}>
                <div className="formContainer">
                    <form autoComplete="off">

                        <Field
                            name="email"
                            component={usernameInput}
                        />
                        <Field
                            name="password"
                            component={passwordInput}
                        />
                            <RaisedButton onClick={handleSubmit} className="enterButton" primary fullWidth type="submit">
                                Enter
                            </RaisedButton>
                    </form>
                </div>
            </Paper>
        </div>
    </div>
    )};

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

const LoginForm =  reduxForm({
  validate: validate,
  form: 'LoginForm'
})(Login);

function mapStateToProps(state) {
    const values = formValueSelector('LoginForm');
    return {
        user: values(state, "email", "password")
    };
}

export default connect (mapStateToProps)(LoginForm);

