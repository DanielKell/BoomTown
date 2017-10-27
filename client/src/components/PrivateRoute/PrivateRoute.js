import React from 'react';
import { connect } from 'react-redux';
import {
    Route,
    Redirect
} from 'react-router-dom';
 
 const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} 
  render={props => (
    authenticated ? (
      <Component {...props}/>
    ) : (
        
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const mapStateToProps = state => ({
    authenticated: state.auth.user,
});

export default connect(mapStateToProps)(PrivateRoute);


// NEED TO connect this to the redux store - replace fakeAuth.isAuthenticated
//Use mapStateToProps and pass in user credentials 
// Replace any route you want to be private with this route, as such: 
// <PrivateRoute path="/protected" component={Protected}/>