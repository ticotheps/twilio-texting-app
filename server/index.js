// Installed dependency for dotenv to hold environment variable
const dotenv = require('dotenv');

// Install Dependencies with 'yarn add express cors twilio'
var express = require('express');
var cors = require('cors');
var twilio = require('twilio');


// Twilio API requirements
var accountSid = process.env.MY_ACC_SID;
var authToken = process.env.MY_AUTH_TOKEN;
var client = new twilio(accountSid, authToken);

var app = express(); // alias

app.use(cors()); // blocks the browser from restricting any data

// Welcome page for the server
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

// Twilio Text
app.get('/send-text', (req, res) => {
    // _GET Variables, passed via query string
    const { recipient, textmessage } = req.query

    // Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,
        from: '+19893490063' // from Twilio
    })
    .then((message) => console.log(message.sid));
})

// Must have nodemon installed, http://localhost:4000
app.listen(4000, () => console.log("Running on Port 4000"));