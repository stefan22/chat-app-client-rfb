import React, {useState} from 'react';
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
import { addMessage } from '../../redux/actions/messagesActions';


const AddButton = ({addMessage,user}) => {
	const classes = addButton();

  const [open,setOpen] = useState(false);
	const [message,setMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

	const handleOnChange = (evt) => {
		let msg = evt.target.value;
		setMessage(msg);
	}

  const handleClose = (evt) => {
		let value = evt.target.parentElement.name;
    setOpen(false); 
    // pressed post
    if (!!value && value.toLowerCase() === 'post') addMessage(message,user);
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
								onChange={(e) => handleOnChange(e)}
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
  addMessage

}

export default connect(mapStateToProps,mapActionsToProps)(AddButton);