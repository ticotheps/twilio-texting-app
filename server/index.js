// Install Dependencies with 'yarn add express cors twilio'

const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

// Installed dependency for dotenv to hold environment variable
require('dotenv').config();

// Twilio API requirements
const accountSid = MY_ACC_SID;
const authToken = MY_AUTH_TOKEN;