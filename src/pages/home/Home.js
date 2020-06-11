import React, { Component, createRef } from 'react';
// comps
import UserProfile from '../../components/userProfile/UserProfile';
import Messages from '../../components/messages/Messages';
// helpers
import { scrollListenerHelper, formDataHelper } from '../../components/helperFns';
// matui
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
// redux
import { connect } from 'react-redux';
import { getMessages } from '../../redux/actions/messagesActions';
import { setProfileImage } from '../../redux/actions/usersActions';
// styles
import styles from './home.styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.homeHeadingRef = createRef(); //pg main-heading ref
  }

  componentDidMount() {
    this.props.getMessages();
    window.addEventListener('scroll', this.scrollListenerFun,false);

  }

  scrollListenerFun = () => {
    return scrollListenerHelper(this.homeHeadingRef,this.props.classes);
  }

  handleUserProfileImage = async (evt) => {
    const image = evt.target.files[0];
    let formData = await formDataHelper(image)
    this.props.setProfileImage(formData);
  };

  componentWillUnmount() {//removes ref dom anim handle
    window.removeEventListener('scroll', this.scrollListenerFun, false);
  }

  render() {
    //console.log(this);
    const {
      classes,
      authenticated,
      loading,
      messages,
      user,

    } = this.props;

    // grid when !mobile
    let sm1 = (!!authenticated) ? 8 : 12;
    let sm2 = (!!authenticated) ? 4 : 'auto';
    

    return (
        <Grid container>
          <Grid item xs={12}>
            <header className={classes.homeHeader}>
              <Typography
                  ref={this.homeHeadingRef}
                  variant='h2' 
                  className={classes.homeTitle} 
                  color='primary' align='center'
                  >Messages
              </Typography>
            </header>
          </Grid>
          <Grid item sm={sm1} xs={12}>
           
            <div className={classes.homeCards}>
              {messages.length > 0 && (
                messages.map((msg) => (
                  <Messages
                    key={msg.messageId}
                    messages={messages}
                    handleLikedUnliked={this.handleLikedUnliked}
                    {...msg}
                  />
                ))
              )}
            </div>
          </Grid>
          <Grid item sm={sm2} xs={12}>
            <div className={classes.homeRight}>
              {!!authenticated && (
                <UserProfile
                  protected={user.protected}
                  authenticated={authenticated}
                  loading={loading}
                  handleUserProfileImage={this.handleUserProfileImage}
                />
              )}
            </div>
          </Grid>
        </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user,
  likes: state.user.likes,
  messages: state.messages,
  loading: state.ui.loading,
});

const mapActionsToProps = {
  getMessages,
  setProfileImage,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Home));
