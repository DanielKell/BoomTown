import React from 'react';
import { Switch, Route } from 'react-router-dom';
 
import Items from '../containers/Items';
import Login from '../containers/Login';
import Share from '../containers/Share';
import ProfileContainer from '../containers/ProfileContainer';
import NotFound from '../containers/NotFound'; 
 
 const Routes = () => (
     <Switch>
         <Route exact path="/" component={Items} />
         <Route path="/login" component={Login} />
         <Route path="/share" component={Share} />
         <Route path="/profile/:id" component={ProfileContainer} />
         <Route component={NotFound} />
     </Switch>
 );

 /*const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)*/
// NEED TO connect this to the redux store - replace fakeAuth.isAuthenticated
//Use mapStateToProps and pass in user credentials 
// Replace any route you want to be private with this route, as such: 
// <PrivateRoute path="/protected" component={Protected}/>

//Essentially make all above routes PrivateRoute except 404 and home, and import privateRoute component
 
 export default Routes;