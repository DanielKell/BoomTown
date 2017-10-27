import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import ValidatedTextField from '../../components/ValidatedTextField';

import './styles.css';
import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';
import {usernameInput, passwordInput} from './loginInput';

    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = "Please add a title";
        }
        // if (values.email && values.email.length > 10) {
        //     errors.email = "Your title is too long.";
        // }

        if (!values.password) {
            errors.password = "Please add a description";
        }

    //    if (values.password && values.password.length > 10) {
    //         errors.password = "Please add a description";
    //     }
        return errors;
    }

const Login = ({ handleSubmit }) => (
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
                        {/*<div>
                            <ValidatedTextField label="Email" />
                        </div>
                        <div>
                            <ValidatedTextField label="Password" />
                        </div>*/}

                        <Field
                            name="email"
                            component={usernameInput}
                        />
                        <Field
                            name="password"
                            component={passwordInput}
                        />

                        <Link to="/">
                            <RaisedButton onClick={handleSubmit} className="enterButton" primary fullWidth type="submit">
                                Enter
                            </RaisedButton>
                        </Link>
                    </form>
                </div>
            </Paper>
        </div>
    </div>
);

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

// export default Login;

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

