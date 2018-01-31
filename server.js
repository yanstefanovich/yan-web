// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
////////////////////////////////////////////////////////////////////////////////
var app = express();

// Declare port
const port = process.env.PORT || 3000;
////////////////////////////////////////////////////////////////////////////////

// Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
////////////////////////////////////////////////////////////////////////////////

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});
////////////////////////////////////////////////////////////////////////////////

// Start the app
app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
