import {Component} from "react";
import React from "react";

class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const {member, text, timestamp} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message newMembers";

    let messegeTime = '';
    const time = new Date(timestamp);
    messegeTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    return (
      <li className={className} key={Math.random()}>
      <span
        className="avatar"
        style={{backgroundColor: member.clientData.color}}
      />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}<span className="time">{messegeTime}</span></div>
        </div>
      </li>
    );
  }

}

export default Messages;