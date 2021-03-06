// console.log("hello");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Border and Background</title>
      <style>
          #firstpara{
              background-color: red;
              height: 100px;
              width: 400px;
  
              border: 3px solid black;
              /* border-width: 10px;
              border-style: solid;
              border-color: green; */
              border-radius: 10px;  /*this is use for curve the border*/
          }
          #secondpara{
              background-color: rgb(243, 28, 211);
              height: 100px;
              width: 400px;
              border-top: 3px solid grey;
              border-bottom: 3px solid skyblue;
              border-left: 3px solid violet;
              border-right: 3px solid green;
              border-top-left-radius: 5px;
  
          }
          #thirdpara{
              height: 500;
              width: 400;
              background-image: url();
          }
  
      </style>
  </head>
  <body>
      <h3>heading of border and Background</h3>
      <p id="firstpara"> this is the paragraph of background</p>
  
      <h3>heading of second border and Background</h3>
      <p id="secondpara"> this is the paragraph of second background</p>
  
      <h3>heading of third border and Background</h3>
      <p id="thirdpara"> this is the paragraph of second background</p>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
