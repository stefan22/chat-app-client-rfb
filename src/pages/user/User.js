import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import AddButton from '../../components/addButton/AddButton';
// matui
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FabButton from '../../components/FabButton';
// redux
import { connect } from 'react-redux';
import { getUserProfileNMessages } from '../../redux/actions/usersActions';
// styles
import userStyles from './user.styles';
// gsap
import {gsap} from 'gsap';

const gsapRun = (handle) =>  {
    let handleClassName;
    handle.current !== null ?
    handleClassName = handle.current.classList[1].split('-')[1] : handleClassName = '';
    switch (handleClassName) {
      case 'userTitle':
        return gsap.from(handle.current, {
          opacity: 0.35,
          color: '#222222',
          duration: 2.5, 
          rotationX: 360
        });
      case 'userSubtitle':
        return gsap.from(handle.current, {
          opacity: 0.35,
          duration: 2.75,
          x: - 1200
        });
      case 'userSubtitleProfile':
        return gsap.from(handle.current, {
          opacity: 0.35,
          duration: 3,
          x: 1500
        });
      default:
        return;
    }
}


class User extends Component {
  constructor(props) {
    super(props);
    this.userRef = createRef(null);
    this.userMessagesRef = createRef(null);
    this.userProfileRef = createRef(null);
  }

  componentDidMount() {
    this.getUser();
    window.scrollTo(0,0);
    //gsap runs
    gsapRun(this.userRef);
    gsapRun(this.userMessagesRef);
    gsapRun(this.userProfileRef);
  }

  getUser = () => {
    this.props.getUserProfileNMessages(this.props.match.params.user);
  }
  

  render() {
    console.log(this);
    let memberSince;
    const isUser = this.props.match.params.user;
    let pageTitle = isUser.charAt(0).toUpperCase() + isUser.slice(1);
    if(!!this.props.user.protected.createdAt) {
      memberSince = this.props.user.protected.createdAt.split("T")[0];
    }
    const {
      classes,
      authenticated,
      userMessages,
      user,
    } = this.props;

    
    let smallLargeGridSize = !authenticated ? 9 : 6;
  

    return (
      <div className={classes.userWrapper}>
        <Grid container spacing={4}>
        
            <Grid item sm={12} xs={12}>
              <div className={classes.userWrapper}>
                <header className={classes.userHeader}>
                  <Typography 
                    ref={this.userRef}
                    className={classes.userTitle}
                    variant='h2' color='primary' align='center'>
                    {pageTitle}
                  </Typography>
                </header>
              </div>
            </Grid>

            <Grid item lg={smallLargeGridSize} md={12} sm={smallLargeGridSize} xs={12}>
                <header className={classes.messagesHeader}>
                  <Typography 
                    ref={this.userMessagesRef}
                    className={classes.userTitle2}
                    variant='h4' align='left'
                  >
                    Messages
                  </Typography>
                </header>
                <div className={classes.userMessages}>
                  {!!userMessages && userMessages.length > 0 ?
                    userMessages.map(msg => 
                      <Card key={msg.messageId} className={classes.userRoot} elevation={2}>
                        <CardActionArea>
                           <CardContent>
                            <Typography className={classes.userName} gutterBottom variant="h5" component="h2">
                              {(msg.user).charAt(0).toUpperCase()}{(msg.user).slice(1)}
                            </Typography>
                            <Typography variant="body2" className={classes.userMainMessage} component="p">
                              {msg.message}
                            </Typography>

                            <Typography variant="body2" className={classes.userMessage} component="p">
                              <span className={classes.userMessageq}>Created:</span> {msg.createdAt.split('T')[0]}
                            </Typography>
                            <Typography variant="body2" className={classes.userMessage} component="p">
                              <span className={classes.userMessageq}>Likecount:</span> {msg.likeCount}
                            </Typography>
                            <Typography variant="body2" className={classes.userMessage} component="p">
                              <span className={classes.userMessageq}>Message Id:</span> {msg.messageId}
                            </Typography>
                          

                          </CardContent>

                        

                        </CardActionArea>
                       
                      </Card>
    
                    ) : (
                      'No messages'
                    )
                  }
                </div>
            </Grid>

            {!authenticated &&
            <Grid item lg={3} sm={3}>
            <header>
              <FabButton variant={"extended"}
                  className={classes.userFabButton}
                  color={"secondary"}
               />
            </header>
            <div className={classes.userFootnote}>
              You must have an account, in order to see user's profile.<br />
              Follow this link to
              <Link to='/signup' className={classes.signupLink}>
                <Button color="secondary">
                  Signup
                </Button>
              </Link>
            </div>
            
            </Grid>
            }

            {!!authenticated && 
            <Grid item lg={6} md={12} sm={6} xs={12}>
                <header className={classes.messagesHeader}>
                  <Typography
                    ref={this.userProfileRef}
                    className={classes.userTitle2}
                    variant='h4' align='center'
                  >
                    Profile
                  </Typography>
                </header>

                <Card className={classes.userProfileInfo} elevation={2}>
                      <CardMedia
                        className={classes.userProfileImage}
                        component="img"
                        alt={"user profile"}
                        width="150"
                        height="150"
                        image={user.protected.imageUrl}
                      />
                      <CardActionArea>
                        <CardContent className={classes.userInfoWrapper}>
                          <Typography className={classes.userSubtitlesHeading} gutterBottom variant="h5" component="h2">
                            {pageTitle}
                          </Typography>
                          <Typography 
                              className={classes.userSubtitles}
                              variant="subtitle1" color="textSecondary" component="p">
                              <span className={classes.userUserSpan}>Id:</span> 
                              {user.protected.userId}
                          </Typography>

                          <Typography 
                              className={classes.userSubtitles}
                              variant="subtitle1" color="textSecondary" component="p">
                            <span className={classes.userUserSpanBio}>Bio:</span> {user.protected.bio}
                          </Typography>
                            <br />
                          <Typography 
                              className={classes.userSubtitles}
                              variant="subtitle1" color="textSecondary" component="p">
                            <span className={classes.userUserSpan}>Email:</span> {user.protected.email}
                          </Typography>
                          <Typography 
                              className={classes.userSubtitles}
                              variant="subtitle1" color="textSecondary" component="p">
                            <span className={classes.userUserSpan}>Location:</span> {user.protected.location}
                          </Typography>
                          <Typography 
                              className={classes.userSubtitles}
                              variant="subtitle1" color="textSecondary" component="p">
                            <span className={classes.userUserSpan}>Website:</span> {user.protected.website}
                          </Typography>
                          <Typography 
                              className={classes.userSubtitles}
                              variant="subtitle1" color="textSecondary" component="p">
                            <span className={classes.userUserSpan}>Member since:</span> 
                            {memberSince}
                          </Typography>

                        </CardContent>
                      </CardActionArea>
                      {!authenticated ?
                      <CardActions className={classes.userActions}>
                        <Typography 
                          className={classes.userActionsHeading}
                          variant="body1" color="textSecondary" component="p">
                          You must be logged in to view this.
                        </Typography>
                        <Button 
                          href={"/signup"}
                          size="small" color="secondary">
                          Sign up
                        </Button>
                        <Button 
                          href={"/login"}
                          className={classes.userLoginButton} 
                          size="small" 
                          color={"secondary"}>
                          Login
                        </Button>
                      </CardActions>
                      :
                      <CardActions 
  
                        className={classes.userActions}>
                        <Typography 
                          className={classes.userActionsHeading}
                          variant="body1" color="textSecondary" component="p">
                          Post a new message.
                        </Typography>
                        <Button 
                          size="small" color="secondary">
                          <AddButton 
                            color={"primary"}
                          />
                        </Button>
                      </CardActions>
                      }
                </Card>
            </Grid>
            }
        
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user,
  userMessages: state.user.userMessages,
  ui: state.ui,
});

const mapActionsToProps = {
  getUserProfileNMessages,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(userStyles)(User));
