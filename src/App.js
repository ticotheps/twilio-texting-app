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

  render() {
    const { text } = this.state;

    const space = {
      margin: 8
    };

    const textArea = {
      borderRadius: 4
    };

    return (
      <div className="App">
        <h1 className="welcome-title">Welcome to Tico's Texting App!</h1>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
