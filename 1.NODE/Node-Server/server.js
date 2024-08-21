// 1. Import rewuired modules
const http = require("http");

//2. Define the handler
const requestHandler = (req, res) => {
  //send response
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello, World, this is my first node js server");
};

//3.Create the server
const server = http.createServer(requestHandler);

//4. Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is runnig on http://localhost:${PORT}`);
});
