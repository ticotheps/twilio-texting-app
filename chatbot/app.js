const dotenv = require('dotenv');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect('mongodb+srv://tico:<password>@tico-chatbot-y60so.mongodb.net/test?retryWrites=true')

