var mysql = require('mysql');
var connection;


if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
// 	connection = mysql.createConnection({
// 		host: 'o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
// 		user: 'root',
// 		password: 'w2kwle9ombyv2c7b',
// 		database: 'sponyzcxpuhfrj7k'
// 	});



connection = mysql.createConnection({
	host: "localhost",
	root: 3306,
	user: "root",
	password: "sam067581968",
	database: "burgers_db" 
});


connection.connect(function(err) {
	if (err) {
		console.error('error conencting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});


module.exports = connection;