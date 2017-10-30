import React from 'react';
import { Switch, Route } from 'react-router-dom';
 
import Items from '../containers/Items';
import Login from '../containers/Login';
import Share from '../containers/Share';
import ProfileContainer from '../containers/ProfileContainer';
import NotFound from '../containers/NotFound'; 
import PrivateRoute from '../components/PrivateRoute';
 
 const Routes = () => (
     <Switch>
         <Route path="/login" component={Login} />
         <PrivateRoute exact path="/" component={Items} />
         <PrivateRoute path="/share" component={Share} />
         <PrivateRoute path="/profile/:id" component={ProfileContainer} />
         <Route component={NotFound} />
     </Switch>
 );

 export default Routes;