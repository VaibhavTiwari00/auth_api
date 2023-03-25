// const express = require("express");
// const app = express();
// const auth_register = require("./controllers/register.controllers");

// function index(req, res) {
//   console.log(auth_register);
//   res.send(auth_register);
// }

// app.get("/", index);

// app.get("/register", auth_register.register);

// app.listen(5000, () => {
//   console.log("app will listen on port 5000");
// });

var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello, world!");
  response.end();
}

http.createServer(onRequest).listen(3000, () => {});
