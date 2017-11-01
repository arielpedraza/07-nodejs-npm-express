'use strict';

// TODO: Initialize your project using NPM to create and populate  package.json and package-lock.json files. Don't forget to add node_modules to your .gitignore!

// DONE: Require the ExpressJS package that you installed via NPM, and instantiate the app.
const express = require('express');
const app = express();
// Remember to install ExpressJS, and be sure that it's been added to your package.json as a dependency.
// There is also a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use().
app.use(express.static('./public'));

// COMMENT: Why are our files in a "public" directory now? How does ExpressJS serve files?
// You don't want end users access to files outside what is served to them. App.use('/static', 'directory') *specifically* defines the directories and files which can be accessible to web requests sent to *that* node server.... in this case, the server instance named 'app'.

// DONE: Refactor to use arrow function

app.post('/articles', bodyParser, (request, response) => {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

// DONE: Write a new route, using an arrow function, that will handle a request and send the new.html file back to the user
app.get('/new', (req, res) => {
  res.sendFile('new.html', {root: './public'});
})

// STRETCHGOAL: Create a route and callback that will serve up the new.html page via a separate URI.
app.get('/article', (req, res) => {
  res.sendFile('new.html', {root: './public'});
})

app.get('/*', (req, res) => {
  res.send('<h2>You have reached a non-existent page. Please click the link below to return to the homepage.<h2><hr><a href="index.html">Click Here</a>');
})

//STRETCHGOAL: Create a 404 route to handle any requests other than index.html or new.html, and deliver a 404 status message to those invalid requests

app.listen(PORT, () => {
  // TODO: Refactor this to arrow function, log to the console a message that lets you know which port your server has started on
  console.log(`Server started on port ${PORT}`);
});
