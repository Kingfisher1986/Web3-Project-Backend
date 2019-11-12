"use strict";
var port = process.env.PORT || 8081;

const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      cors = require('cors'),
      app = express();

// app.use(morgan('dev'));
// app.use(express.static(__dirname + '/static_html'));
app.use(express());
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())
app.use(cors());

// var issue = [{name: 'Issue1', date: new Date(), priority: 1}];
var projects = [{ name: 'Projekt1', issues: [{name: 'Issue1', date: new Date(), priority: 1}]}, { name: 'Projekt2', issues: []}, { name: 'Projekt3', issues: []}];


app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get('/projects', function(req, res) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  res.status(200).json(projects);
});

app.post('/project', function(req, res) {
  console.log("Project added!");
  projects.push(req.body);
  // projects = req.body.projects;
  console.log(projects);
  res.send(req.body);
});

app.put('/project', function(req, res) {
  console.log("Project updated!");
  var index = projects.findIndex(project => project.name === req.body.name);
  projects[index].issues = req.body.issues;
  res.send(req.body);
});

app.listen(port, function(){
  console.log("ready captain.");
});
