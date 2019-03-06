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

  handleChanges = e => {
    console.log("The handleChange() function was triggered!");
    e.preventDefault();

  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Tico's<br/>*PROTOTYPE*<br/>Hooper Texting App!</h1>
        <div className="App-content">
          <h2>Send the "Bat Signal"!</h2>
          <div className="container-recipient">
            <label className="label-recipient">Recipient's Phone Number</label>
            <input 
              className="input-recipient"
              type="text"
              value={this.state.text.recipient}
              onChange={this.handleChanges}
            />
          </div>

          <label>Message to</label>
        </div>
      </div>
    );
  }
}

export default App;
