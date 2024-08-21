const http = require("http");
const url = require("url");

//2. Define the handler
const requestHandler = (req, res) => {
  // pass the url
  const passedUrl = url.parse(req.url, true);

  const pathname = passedUrl.pathname;
  const pathComponent = pathname.split("/").filter(Boolean);
  if (pathComponent[0] === "products" && pathComponent[1]) {
    // Take the product ID and send to the user
    // perform db query
    const productId = pathComponent[1];
    // Send to the user
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`Product ID ${productId}`);
  } else {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Not Found");
  }
};

//3.Create the server
const server = http.createServer(requestHandler);

//4. Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is runnig on http://localhost:${PORT}`);
});
