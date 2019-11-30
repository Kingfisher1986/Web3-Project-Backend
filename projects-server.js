"use strict";

const db = require('./queries');

var port = process.env.PORT || 8081;
// var port = process.env.PORT || 3000;

const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      cors = require('cors'),
      app = express();

app.use(express());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())
app.use(cors());


app.get("/", function(req, res) {
  res.send("Hello World");
});


app.get('/projects', db.getProjects);
app.get('/issues', db.getIssues);
app.post('/projects', db.createProject);
app.post('/issues', db.createIssue);
app.delete('/issues', db.deleteIssue);


app.listen(port, function(){
  console.log("ready captain.");
});
