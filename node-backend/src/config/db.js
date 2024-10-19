const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // e.g., 'localhost'
  user: process.env.DB_USER, // your MySQL username
  password: process.env.DB_PASS, // your MySQL password
  database: process.env.DB_NAME // your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;
