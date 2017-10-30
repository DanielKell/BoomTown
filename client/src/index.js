import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import * as firebase from 'firebase';

import './index.css';
import muiTheme from './config/theme';
import Layout from './components/Layout';
import Routes from './routes';
import client from './config/apolloClient';
import store from './redux/store'; 
import {login, logout} from './redux/modules/authenticate';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWffBz_WDtelIh_FUuRZQ_g0NgjieUiHU",
    authDomain: "boomtown-8745c.firebaseapp.com",
    databaseURL: "https://boomtown-8745c.firebaseio.com",
    projectId: "boomtown-8745c",
    storageBucket: "",
    messagingSenderId: "250623409233"
  };
  firebase.initializeApp(config);

  //Authorization check
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          store.dispatch(login(user));
      } else {
          store.dispatch(logout());
      }
  })

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <ApolloProvider client={client} store={store}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </ApolloProvider>
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
