import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';




class WarningMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        notAuthWarning: 'To Like a message, you must be logged in',
        authWarning: 'Message already liked',
        authDelWarning: 'Cannot delete a message posted by someone else.',
      }
    }
  }

  messages = () => {
    const { authenticated, warning, deleteMessageWarning } = this.props;
    const {options: {notAuthWarning, authWarning, authDelWarning}} = this.state;
    return (
      (!authenticated && !!warning) ? 
        notAuthWarning : (!!authenticated && !!deleteMessageWarning) ?
        authDelWarning : authWarning
    );
}

  handleClick = () => {
    if (!!this.props.deleteMessageWarning) this.props.handleDeleteWarning();
  }

  handleClose = () => {
    if (!!this.props.warning) this.props.handleResetliked();
    if (!!this.props.deleteMessageWarning) this.props.handleResetDeleteWarning();
  }

  render() {
    //console.log(this);
    const { 
      vertical,
      horizontal,
      open,
    

} = this.props;
    

    const loginAction = (
        <Button
          onClick={this.handleClose}
          color='secondary' size='small'>
          Close
        </Button>
    );

    return (
      <div>
        <button
          type="button"
          id={"warningClickButton"}
          hidden={"hidden"}
          onClick={this.handleClick}
        >
        </button>

      {!!open &&
        <Snackbar
          style={{marginTop:'3rem'}}
          size={"xs"}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={this.messages()}
          key={horizontal+vertical }
          action={loginAction}
        />
      }

      </div>
    );
  }
}

export default WarningMessage;
