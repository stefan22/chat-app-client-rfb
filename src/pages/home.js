import React, { Component } from 'react';
// comps
import UserProfile from '../components/UserProfile';
import Messages from '../components/Messages';
// matui
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
// redux
import { connect } from 'react-redux';
import { getMessages } from '../redux/actions/messagesActions';
import { setProfileImage } from '../redux/actions/usersActions';
// styles
import styles from '../theme/home';



class Home extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  handleUserProfileImage = (evt) => {
    const image = evt.target.files[0];
    const formData = new FormData();
    formData.append('file',image,image.name);
    this.props.setProfileImage(formData);

   

  }

  render() {
    //console.log(this);
    const { classes, authenticated, messages, loading, user } = this.props;
    
    return ( 
        <Grid container>
        <Grid item sm={8} xs={12}>

          <div className={classes.homeCards}>
          {
            messages.length > 0 && !loading ?
              messages.map(msg => 
              <Messages 
                key={msg.messageId}
                {...msg}
              />
              
              )
              : ( <CircularProgress
                    color='primary'
                    size={40}
                    className={classes.spinner}
                  />          
              )
          }
          </div>
        

        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.homeRight}>
            {!!authenticated &&
              <UserProfile 
                protected={user.protected}
                handleUserProfileImage={this.handleUserProfileImage}
              />
            }
          </div>
        </Grid>
      </Grid>
    )
  }
}


const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  user: state.user,
  messages: state.messages,
  loading: state.ui.loading
});

const mapActionsToProps = {
  getMessages,
  setProfileImage,
}




export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Home));