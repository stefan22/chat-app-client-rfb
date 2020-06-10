import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import addButton from './addButton.styles';
import AddCommentIcon from '@material-ui/icons/AddComment';
// redux
import { connect } from 'react-redux';
//import { deleteMessage } from '../../redux/actions/messagesActions';


const AddButton = ({deleteMessage,messageId,user}) => {
	const classes = addButton();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (evt) => {
    //const { messageId } = props;
    let value = evt.target.parentElement.name;
    setOpen(false); 
    // pressed post
    if (!!value && value.toLowerCase() === 'post') console.log('clicked add message');
  };

  return (
      <div className={classes.deleteButton}>
      
        <AddCommentIcon 
          onClick={handleClickOpen}
          color="secondary"
        />
      

        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle 
            className={classes.dialogTitle}
            id="alert-dialog-title">
            {
              "New Message"
            }
          </DialogTitle>
          <DialogContent className={classes.dialogdescription}>
            <DialogContentText id="alert-dialog-description">
              Press <span className={classes.postAction}>Post</span> to add a new Message or press  <span className={classes.cancelAction}> Cancel</span>, 
              to exit form.
            </DialogContentText>
						<TextField
								autoFocus
								margin="dense"
								id="newMessage"
								label="New message"
								type="text"
								fullWidth
							/>
          </DialogContent>
          <DialogActions>
            <Button onClick={(evt) => handleClose(evt)} name="cancel" color="secondary">
              Cancel
            </Button>
            <Button 
              onClick={(evt) => handleClose(evt)} 
              name="post" 
              color="primary" autoFocus>
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}


const mapStateToProps = state => ({
  user: state.user
})


const mapActionsToProps = {
  

}

export default connect(mapStateToProps,mapActionsToProps)(AddButton);