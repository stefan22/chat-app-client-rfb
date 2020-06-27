import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// matui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddButton from './addButton/AddButton';
import IconButton from '@material-ui/core/IconButton';
//redux
import { connect } from 'react-redux';
import { userLogout } from '../redux/actions/usersActions';
import { resetWarningMessage } from '../redux/actions/uiActions';
//icon
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';


class Navbar extends Component {

  handleLogout = () => {
    console.clear();
    this.props.resetWarningMessage();
    this.props.userLogout();
  }

  render() {
  const { authenticated, user } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Button color="inherit" component={Link} to="/">Home</Button>

          {
          !!authenticated ? (
            <>
          
           <AddButton />

           <IconButton>
              <Link style={{lineHeight: 0}}
              to={`/users/${user.protected.user}`}>
              <AccountBoxRoundedIcon 
                className="userAccount"
                color="primary"
                size="small"
              />
              </Link>
            </IconButton>

            <Button 
              onClick={this.handleLogout}
              color="inherit" 
              component={Link} 
              to="/login"
            >Logout
            </Button>

            </>

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
  authenticated: state.user.authenticated,
  user: state.user,
});

const mapActionsToProps = {
  userLogout,
  resetWarningMessage
}


export default connect(mapStateToProps,mapActionsToProps)(Navbar);