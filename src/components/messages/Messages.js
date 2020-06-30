import React, { Component } from 'react';
import Message from './Message';
// redux
import { connect } from 'react-redux';
import { handleUpdateLikes } from '../../redux/actions/messagesActions';
import {
  sendWarningMessage,
  resetWarningMessage,
  setDeleteWarning,
  resetDeleteWarning,
} from '../../redux/actions/uiActions';



class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedMessage: '',//selected
      open: false,  //warning
      vertical: 'top',  // warning placement
      horizontal: 'right',  // warning placement
    };
  }

  handleDeleteWarning = () => 
    this.setState({open: true}, () => this.props.setDeleteWarning());


  handleResetDeleteWarning = () => {
    this.props.resetDeleteWarning();
  }

  handleLiked = messageId => {
    const { likes, authenticated } = this.props;
    let likedBefore = {};
    this.setState({open: true});
    if (!!authenticated) {
      if (!!likes && likes.length === 0) {
        return  this.props.handleUpdateLikes(messageId);
      }
      else if (!!likes && likes.length > 0) {
        likedBefore = likes.find(m => m.messageId === messageId);
        if (!likedBefore) {//not liked yet
          return this.props.handleUpdateLikes(messageId);
        }// otherwise
        else return this.props.sendWarningMessage();
      }
    }
    this.props.sendWarningMessage();
  }

  handleResetliked = () => 
    this.setState({open: false}, () => this.props.resetWarningMessage());


  render() {
    //console.log(this);

  const { horizontal, vertical, open } = this.state;

    const {
      messages,
      deleteMessageWarning,
      warning,
      authenticated,

    } = this.props;

    return (
      <>
        {messages.length > 0 && (
          messages.map((msg) => (
            <Message
              horizontal={horizontal}
              vertical={vertical}
              open={open}
              key={msg.messageId}
              messages={messages}
              handleLiked={this.handleLiked}
              handleResetliked={this.handleResetliked}
              handleResetDeleteWarning={this.handleResetDeleteWarning}
              handleDeleteWarning={this.handleDeleteWarning}
              authenticated={authenticated}
              warning={warning}
              deleteMessageWarning={deleteMessageWarning}

              {...msg}
            />
          ))
        )}
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  likes: state.user.likes,
  warning: state.ui.warning,
  messages: state.messages,
  deleteMessageWarning: state.ui.deleteMessageWarning,
});

const mapActionsToProps = {
  sendWarningMessage,
  resetWarningMessage,
  handleUpdateLikes,
  setDeleteWarning,
  resetDeleteWarning,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Messages);

