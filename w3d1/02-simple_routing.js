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
  console.log("Received a request", req.url);

  const payload = {
    status: 200,
    options: { "Content-Type": "text/html" },
    message: "",
  };

  switch (req.url) {
    case "/favicon.ico":
      payload.status = 404;
      payload.message = "Sorry no favicon";
      break;

    case "/secret":
      payload.message = "Hello!! Secret Page!";
      break;

    case "/":
      payload.message = "Welcome to the most beautiful page ever.";
      break;

    case "/data.json":
      payload.message = JSON.stringify({ over: 9000, truth: 42 });
      payload.options = { "Content-Type": "application/json" };
      break;
  }

  // if (req.url === "/favicon.ico") {
  //   res.writeHead(404);
  //   return res.end("FAVICON NOT FOUND");
  // }

  // if (req.url === "/secret") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   return res.end("SHHHH IT'S A SECRET PAGE");
  // }

  res.writeHead(payload.status, payload.options);
  res.end(payload.message);
});

server.listen(8000);
