// var http = require('http');
// var url = require('url');
// var fs = require('fs');
var express=require('express');
var app=express();
var mysql = require('mysql');
//Mysql connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "demopro"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(3000);
