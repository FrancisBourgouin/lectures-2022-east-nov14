// Net package => HTTP / TELNET / SSH / ...

// HTTP => Hyper Text Transfer Protocol

// HTTP Server

// Status messages from server:

// 20x => Everything is cool (200 OK, 201 Created)
// 30x => Redirect (301 temporary, 302 permanent)
// 40x => You fudged up (404 not found, 403 unauthorized)
// 50x => Server fudged up

// Request :
// Response :

// Namespacing

// const bob_name = "bob"
// const bob_age = "unknown"
// const bob_isTall = true

const http = require("node:http");

// JSON vs JS object ?
// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log("Received a request", req.url); // GET / GET /favicon.ico

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000);
