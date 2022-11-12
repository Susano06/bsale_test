const mysql = requiere("mysql");

const connection = mysql.createConnection({
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  database: 'bsale_test',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

connection.connect((err, connection) => {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
});
