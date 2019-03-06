import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  };

  sendText = _ => {
    const { text } = this.state;
    //pass variables within the query string
    fetch(`http://localhost:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err))
  }

  handleChangesInput = e => {
    const { text } = this.state;
    console.log("The handleChangesInput() function was triggered!");
    e.preventDefault();
    this.setState({ text: {...text, recipient: e.target.value}});
  }

  handleChangesTextarea = e => {
    const { text } = this.state;
    console.log("The handleChangesTextarea() function was triggered!");
    e.preventDefault();
    this.setState({ text: {...text, textmessage: e.target.value}});
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Tico's *PROTOTYPE*<br/>Hooper Texting App!</h1>
        <div className="App-content">
          <h2>Send a "Bat Signal" Text!</h2>
          <div className="container-recipient">
            <label className="label-recipient">Recipient's Phone Number:</label>
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
          <button>Send Text</button>
        </div>
      </div>
    );
  }
}

export default App;
