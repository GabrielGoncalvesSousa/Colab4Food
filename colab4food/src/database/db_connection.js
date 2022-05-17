var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'colab4food',
  password: '1243',
  database: 'colab4food',
});

con.connect(function(err) {
  if (err) throw err;
  con.query('SELECT * FROM user', function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
