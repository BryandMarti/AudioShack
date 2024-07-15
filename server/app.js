const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: 3306,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL database:', err);
    return;
  }
  console.log('Successfully connected to MySQL database.');
});

app.use('/images', express.static(path.join(__dirname, 'src', 'images')));

app.get('/api/products', (req, res) => {
  const query = 'SELECT Name, Price, Description, ImgPath FROM EProducts';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});



app.get('/src/ContactUs', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'ContactUs'));
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
