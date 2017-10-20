import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
// import { Provider } from 'react-redux'; 
import { ApolloProvider } from 'react-apollo';


import './index.css';
import muiTheme from './config/theme';
import Layout from './components/Layout';
// import Login from './containers/Login';
import Routes from './routes';
import client from './config/apolloClient';
import store from './redux/store'; //Redux

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
