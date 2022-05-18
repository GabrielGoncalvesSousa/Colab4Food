const express = require(`express`);
const app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'colab4food',
  password: '1243',
  database: 'colab4food',
});

con.connect(function(err) {
  if (err) throw err;
});

app.get('/users/', (req, res) => {
  con.query('SELECT * FROM user', function(err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

app.get('/users/specificUser/', (req, res) => {
  con.query(`SELECT * FROM userWHERE nomeUser='${req.query.username}'`, function(err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

app.listen(3000, () => {
  'olaa';
});
