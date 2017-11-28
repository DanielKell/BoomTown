import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import muiTheme from './config/theme';
import Layout from './components/Layout';
import Routes from './routes';
import client from './config/apolloClient';
import store from './redux/store'; 
import {login, logout} from './redux/modules/authenticate';
import firebase from './firebaseSetup';

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
