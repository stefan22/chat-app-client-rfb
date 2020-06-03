import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


class WarningMessage extends Component {

  handleClick = () =>  {
    this.props.handleWarningClick();
  };

  handleClose = () => {
    this.props.handleWarningClick();
  };

  render() {
    //console.log(this);
    const { 
      warning, 
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
          size={"xs"}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={'To Like a message, you must be logged in.'}
          key={vertical + horizontal}
          action={loginAction}
        />
      }

      </div>
    );
  }
}

export default WarningMessage;
