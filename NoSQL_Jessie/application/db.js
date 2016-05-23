var cradle = require('cradle');

var db = new(cradle.Connection)('http://127.0.0.1', 5984, {
  auth: {username: 'Admin', password: 'admin'}
}).database('restaurant2');

module.exports = db;