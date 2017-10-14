import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
 
import Items from '../containers/Items/Items';
import Login from '../containers/Login/Login';
import Share from '../containers/Share/Share';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import NotFound from '../containers/NotFound/NotFound'; 
 
 const Routes = () => (
     <Switch>
         <Route exact path="/" component={Items} />
         <Route path="/login" component={Login} />
         <Route path="/share" component={Share} />
         <Route path="/profile/:id" component={ProfileContainer} />
         <Route component={NotFound} />
     </Switch>
 );
 
 export default Routes;