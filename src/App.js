import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  };

  handleChangesInput = e => {
    const { text } = this.state;
    // console.log("The handleChangesInput() function was triggered!");
    e.preventDefault();
    this.setState({ text: {...text, recipient: e.target.value}});
  }

  handleChangesTextarea = e => {
    const { text } = this.state;
    // console.log("The handleChangesTextarea() function was successful!");
    e.preventDefault();
    this.setState({ text: {...text, textmessage: e.target.value}});
  }

  sendText = _ => {
    console.log("Your text message was sent successfully!");
    const { text } = this.state;
    //pass variables within the query string
    fetch(`http://192.168.1.14:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err));

    this.setState({
      text: {
        recipient: '',
        textmessage: ''
      }
    });
  }

  render() {
    return (
      <div className="App-container">
        <h1 className="App-title">Welcome to Tico's *PROTOTYPE*<br/>Hooper Texting App!</h1>
        <div className="App-content">
          <div className="App-header">
            <i className="fas fa-basketball-ball"></i>
            <h2 className="App-heading">Send a Text to the Hoop Squad!</h2>
            <i className="far fa-comments"></i>
          </div>
          <div className="container-recipient">
            <label className="label-recipient">Hooper's Phone Number:</label>
            <input 
              className="input-recipient"
              type="text"
              value={this.state.text.recipient}
              onChange={this.handleChangesInput}
              placeholder="Phone Number"
            />
          </div>
          <div className="container-message">
            <label className="label-message">Message:</label>
            <textarea 
              className="text-area-message"
              type="text"
              value={this.state.text.textmessage}
              onChange={this.handleChangesTextarea}
              placeholder="Message"
            />
          </div>
          <button 
            className="send-button"
            onClick={this.sendText}
          >
            Send Text
          </button>
        </div>
      </div>
    );
  }
}

export default App;
