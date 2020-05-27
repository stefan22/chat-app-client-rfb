import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// matui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
//redux
import { connect } from 'react-redux';
import { userLogout } from '../redux/actions/usersActions';

class Navbar extends Component {

  handleLogout = () => {
    console.clear();
    this.props.userLogout();
  }

  render() {
  const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Button color="inherit" component={Link} to="/">Home</Button>

          {
          !!authenticated ? (
            <Button 
              onClick={this.handleLogout}
              color="inherit" 
              component={Link} 
              to="/login"
            >Logout
            </Button>
            ) : (
            <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Signup</Button>
            </>
            )
          }
          
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

const mapActionsToProps = {
  userLogout
}


export default connect(mapStateToProps,mapActionsToProps)(Navbar);