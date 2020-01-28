process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureExpress = require('./config/env/express');

const app = configureExpress();

app.listen(5000);

module.exports = app;

console.log('server running at http://localhost:5000/');