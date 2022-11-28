const net = require("net");

const server = net.createServer((connection) => {
  // 'connection' listener.
  connection.setEncoding("utf8");

  console.log("client connected");

  connection.on("data", (data) => {
    console.log(data);
  });
});

server.on("error", (err) => {
  throw err;
});

server.listen(8124, () => {
  console.log("server bound");
});
