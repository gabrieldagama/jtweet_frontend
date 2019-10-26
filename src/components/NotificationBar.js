import React, { Component } from 'react';

class NotificationBar extends Component {
  render() {
    return (
      <div className={`NotificationBar alert ${ this.props.styleName }`}>
          {this.props.msg}
      </div>
    );
  }
}

export default NotificationBar;
