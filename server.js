const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const server = express();

server.use(cors());

server.get('/api/users', function(req, res) {
  res.status(200).send('server is up!!');
});

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/users', {useMongoClient: true})
  .then(function(db) {
    console.log('All your databases belong to us!');
    server.listen(3456, function() {
      console.log('server running on port 3456');
    });
  })
  .catch(function(err) {
    console.log('Database Connection failed', err.message);
  });

