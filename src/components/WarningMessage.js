import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


class WarningMessage extends Component {

  handleClick = () => {
    //if (!!this.props.warning) this.props.sendWarningMessage();
    if (!!this.props.deleteMessageWarning) this.props.handleDeleteWarning();
  }

  handleClose = () => {
    if (!!this.props.warning) this.props.handleResetliked();
    if (!!this.props.deleteMessageWarning) this.props.handleResetDeleteWarning();
  }

  render() {
    //console.log(this);
    const { 
      warning, 
      authenticated,
      deleteMessageWarning,
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

      {!!warning && !!open &&
        <Snackbar
          style={{marginTop:'3rem'}}
          size={"xs"}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={
            (!authenticated) ? 
              'To Like a message, you must be logged in.' :
              'Message already liked.'
          }
          key={horizontal+vertical }
          action={loginAction}
        />
      }

       {!!deleteMessageWarning && !!open &&
        <Snackbar
          style={{marginTop:'3rem'}}
          size={"xs"}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={'It cannot be deleted because it does not belong to you.'}
          key={horizontal+vertical }
          action={loginAction}
        />
      }
      </div>
    );
  }
}

export default WarningMessage;
