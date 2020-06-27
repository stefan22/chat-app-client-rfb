import React, { Component } from 'react';
// Components
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import User from './pages/user/User';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { userLogout, getUserData } from './redux/actions/usersActions';
import { SET_AUTHENTICATED } from './redux/types';
// 3rd prty
import axios from 'axios';
import jwtDecode from 'jwt-decode';
// theme
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import customTheme from './theme/customTheme';
// styles
import './App.css';

const theme = createMuiTheme(customTheme);
//console.log(theme);

const fbToken = localStorage.getItem('fbToken');

if (fbToken) {
  const decodedToken = jwtDecode(fbToken);
  //console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(userLogout());
    window.location.href = '/login';
  } else {
    store.dispatch({type: SET_AUTHENTICATED});
    axios.defaults.headers.common['Authorization'] = fbToken;
    store.dispatch(getUserData());
  } 
} 


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path={'/'} component={Home} />
              <AuthRoute 
                exact path={'/login'}
                component={Login} 
              />
              <AuthRoute 
                exact path={'/signup'}
                component={Signup} 
              />
              <Route 
                exact path={`/users/:user`}
                component={User} 
              />
            </Switch>
          
          </div>
         
        </Router>
      </Provider>
      </MuiThemeProvider>
    );
  }
}

export {theme, App};
