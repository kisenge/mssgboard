const express = require('express');
const app = express();
const database_interface = require('./databaseInterface');
require('dotenv').config();

// Middleware
app.use(express.json());

// Enable CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Update this to your frontend's actual URL if needed
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// Routes
app.get('/', (req, res) => {
  database_interface.getMessages()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.post('/messages', (req, res) => {
  database_interface.createMessage(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.delete('/messages/:id', (req, res) => {
  database_interface.deleteMessage(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.put('/messages/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  database_interface.updateMessage(id, body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Export the handler for Neon
module.exports.handler = require('neon-serverless').handler(app);
