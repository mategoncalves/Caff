const http = require('http');

const fs=require('fs');

fs.readFile('index.html',(err,html)=>{
  if(err){
    throw err;
  }
  const hostname = '127.0.0.1';
  const port = 80;

  const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.write(html);
    res.end();
  });

  server.listen(port,hostname,()=>{
    console.log('Comecou na porta '+port);
  });
});
