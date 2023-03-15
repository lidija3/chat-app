import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form className="chat-form" onSubmit={e => this.onSubmit(e)}>
          <input
            className="chat-input"
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message.."
            autoFocus={true}
          />
          <button className="send-btn">Send</button>
        </form>
      </div>
    );
  }
}

export default Input;