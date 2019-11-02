const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const http = require('http');

const app = express();

/*const fs=require('fs');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-type','text/plain');
  res.write('Ata');
  res.end();
});

server.listen(port,hostname,()=>{
  console.log('Comecou na porta '+port);
});*/

const logador = function(req,res,next){
  console.log('Logando');
  next();
}

app.use(logador);

app.get('/',function(req,res){
  res.send("ola q tal");
});

app.listen(80,function(){
  console.log('Comecou em 80');
});
