const http = require("http");
const url = require("url");

//2. Define the handler
const requestHandler = (req, res) => {
  // pass the url
  const passedUrl = url.parse(req.url, true);
  console.log(req.method);

  //home route
  if (passedUrl.pathname === "/" && req.method === "GET") {
    //send response
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to the homepage");
  }

  //About route
  else if (passedUrl.pathname === "/about" && req.method === "GET") {
    //send response
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("This is Aboutpage");
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
