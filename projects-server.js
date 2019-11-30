"use strict";

const Project = require('./project');
const Issue = require('./issue');
const db = require('./queries');


var port = process.env.PORT || 8081;
// var port = process.env.PORT || 3000;

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

// var projects = [new Project('Projekt1', [new Issue('Issue1',new Date(), 1)]), new Project('Projekt2', []), new Project('Projekt3', [])];


app.get("/", function(req, res) {
  res.send("Hello World");
});

// app.get('/projects', function(req, res) {
//   // res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//   res.status(200).json(projects);
// });

app.get('/projects', db.getProjects);
app.get('/issues', db.getIssues);
app.post('/projects', db.createProject);
app.post('/issues', db.createIssue);

// app.post('/project', function(req, res) {
//   console.log("Project added!");
//   projects.push(req.body);
//   console.log(projects);
//   res.send(req.body);
// });

// app.post('/project', function(req, res) {
//   console.log("Project added!");
//   projects.push(req.body);
//   console.log(projects);
//   res.send(req.body);
// });

// app.put('/project', function(req, res) {
//   console.log("Project updated!");
//   var index = projects.findIndex(project => project.name === req.body.name);
//   projects[index].issues = req.body.issues;
//   res.send(req.body);
// });

app.listen(port, function(){
  console.log("ready captain.");
});
