var sql = require('mssql');

sql.connect("mssql://jins:gl_programmer2@86.96.194.194/Tracking_db").then(function() {
    // Query

    new sql.Request().query('SELECT TOP 5 * FROM View_LiveVehicleSignal').then(function(recordset) {
        console.log(recordset);
    }).catch(function(err) {
        // ... query error checks
        console.log(err);
    });

})

// var Connection = require('tedious').Connection;
//~~~~~~Success~~~~~~~~~
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'toor',
//     database : 'dummydb'
// });
//
// connection.connect();
//
// connection.query('SELECT * FROM demoauth', function(err, rows, fields) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         // console.log('The solution is: ', rows[0].solution);
//         console.log(rows);
//     }
//
// });
//
// connection.end();
//~~~~~~~~Awesome~~~~~~~~~~~~

// var dbConfig = {
//     server: 'localhost',
//     database: 'dummydb',
//     username: 'root',
//     password: 'toor'
// }
//
// var myconn = new Connection(dbConfig);
// myconn.on('connect', function(err) {
//     if(err) {console.log(err);}
//     else {//if no errors, good to proceed..
//         console.log("Connected succesfully");
//         executeStatement();}
//
// });
//
// var Request = require('tedious').Request;
// var TYPES = require('tedious').TYPES;
//
// function executeStatement() {
//     request = new Request("SELECT * FROM demoauth", function(err) {
//         if (err) {
//             console.log(err);}
//     });
//     var result = "";
//     request.on('row', function(columns) {
//         columns.forEach(function(column) {
//             if (column.value === null) {
//                 console.log('NULL');
//             } else {
//                 result+= column.value + " ";
//             }
//         });
//         console.log(result);
//         result ="";
//     });
//
//     request.on('done', function(rowCount, more) {
//         console.log(rowCount + ' rows returned');
//     });
//     myconn.execSql(request);
// }