const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

const DataBaseKingConnect = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: 3306,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

DataBaseKingConnect.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL database:', err);
    return;
  }
  console.log('You got it Boss, you are connected.');
});

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));
app.use('/images', express.static(path.join(__dirname, 'src', 'images')));

app.get('/api/products', (req, res) => {
  const query = 'SELECT Name, Price, Description, ImgPath, TypeOf FROM EProducts';
  DataBaseKingConnect.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

app.post("/form", (req, res) => {
  const { firstname, lastname, email, subject } = req.body;

  if (!firstname || !lastname || !email || !subject) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  const query = `INSERT INTO Form (first_Name, last_Name, email, subject) VALUES (?, ?, ?, ?)`;
  const values = [firstname, lastname, email, subject];

  DataBaseKingConnect.query(query, values, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err.stack);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    console.log('Query results:', results);
    res.status(200).json({ message: 'Form submitted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
