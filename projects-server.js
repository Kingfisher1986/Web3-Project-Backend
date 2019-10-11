"use strict";
var port = process.env.PORT || 3000;

const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      cors = require('cors'),
      app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static_html'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())

app.use(cors());

// var issue = [{name: 'Issue1', date: new Date(), priority: 1}];
var projects = [{ name: 'Projekt1', issues: [{name: 'Issue1', date: new Date(), priority: 1}]}, { name: 'Projekt2', issues: []}, { name: 'Projekt3', issues: []}];

// app.post('/projects', function(req, res) {
//   todos.push(req.body.project);

//   res.format({
//     'application/json': function() {
//       res.status(200).json({'todo': req.body.project});
//     },
//     'text/html': function() {
//       res.redirect(301, '/');
//     }});
// });

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get('/projects', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).json(projects);
});

app.listen(port, function(){
  console.log("ready captain.");
});
