const express = require('express');
const api = require('./routes/api');
const pages = require('./routes/html');

const PORT = process.env.PORT || 3001;

const app = express();

//standard middleware for using express (parsing JSON and url encoded data)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//calls the set up functions in routes folder for use with express
api(app);
pages(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
