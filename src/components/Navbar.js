import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
  //console.log(this)
  const isAccount = (
    <IconButton>
      <Link style={{lineHeight: 0}}
      to={`/repositories/chatapp/users/${this.props.user.protected.user}`}>
      <AccountBoxRoundedIcon 
        className={"userAccount"}
        color="primary"
        size="small"
      />
      </Link>
    </IconButton>

  );

  const { authenticated } = this.props;


    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Button color="inherit" component={Link} to={'/repositories/chatapp/'}>Home</Button>

          {
          !!authenticated ? (
            <>
          
           <AddButton />

           {this.props.location.pathname === '/repositories/chatapp/' &&
              isAccount
            }

            <Button 
              onClick={this.handleLogout}
              color="inherit" 
              component={Link} 
              to="/repositories/chatapp/login"
            >Logout
            </Button>

            </>

            ) : (
            <>
            <Button color="inherit" component={Link} to={"/repositories/chatapp/login"}>Login</Button>
            <Button color="inherit" component={Link} to={"/repositories/chatapp/signup"}>Signup</Button>
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
  resetWarningMessage,
}


export default withRouter(connect(mapStateToProps,mapActionsToProps)(Navbar));