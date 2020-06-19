import React, { Component } from 'react';
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
// redux
import { connect } from 'react-redux';
import { getUserProfileNMessages } from '../../redux/actions/usersActions';
// styles
import userStyles from './user.styles';




class User extends Component {

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    this.props.getUserProfileNMessages(this.props.match.params.user);
  }
  

  render() {
    console.log(this);
    const { user } = this.props.match.params;
    let pageTitle = user.charAt(0).toUpperCase() + user.slice(1);
    const {
      classes,
      userMessages
    } = this.props;
  

    return (
      <div className={classes.userWrapper}>
        <Grid container spacing={4}>
        
            <Grid item sm={12} xs={12}>
              <div className={classes.userWrapper}>
                <header className={classes.userHeader}>
                  <Typography 
                    className={classes.userTitle}
                    variant='h2' color='primary' align='center'>
                    {pageTitle}
                  </Typography>
                </header>
              </div>
            </Grid>

            <Grid item lg={6} md={12} sm={6} xs={12}>
                <header className={classes.messagesHeader}>
                  <Typography 
                    className={classes.userSubtitle}
                    variant='h4' align='left'
                  >
                    Messages
                  </Typography>
                </header>
                <div className={classes.userMessages}>
                  {!!userMessages && userMessages.length > 0 ?
                    userMessages.map(msg => 
                      <Card key={msg.messageId} className={classes.root} elevation={2}>
                        <CardActionArea>
                           <CardContent>
                            <Typography className={classes.userName} gutterBottom variant="h4" component="h2">
                              {msg.user}
                            </Typography>
                            <Typography variant="body2" className={classes.userMessage} component="p">
                              {msg.message}
                            </Typography>
                          </CardContent>

                          <CardMedia
                            className={classes.userImage}
                            component="img"
                            alt={msg.user}
                            height="100"
                            image={msg.imageUrl}
                            title={msg.user}
                          />

                        </CardActionArea>
                       
                      </Card>
    
                    ) : (
                      'No messages'
                    )
                  }
                </div>
            </Grid>

            <Grid item lg={6} md={12} sm={6} xs={12}>
                <header className={classes.messagesHeader}>
                  <Typography
                    className={classes.userSubtitle}
                    variant='h4' align='left'
                  >
                    Profile
                  </Typography>
                </header>
                <Card className={classes.rootProfile} elevation={2}>
                
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={"user profile"}
                        height="140"
                        image={"#"}
                        title={"user profile"}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          User name
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          details
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                
                  <CardActions>
                    You must be logged in to view this.
                    <Button size="small" color="primary">
                      Sign up
                    </Button>
                    <Button size="small" color="primary">
                      Login here
                    </Button>
                  </CardActions>
                </Card>
            </Grid>

        
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
