const http = require("http");
//mimic (database)

const employees = [
  { id: 1, name: "Emmanuel" },
  { id: 2, name: "Honore" },
];
//2. Define the handler
const requestHandler = (req, res) => {
  const { method, url } = req;
  const parts = url.split("/");
  const id = parts[2];

  //! Get all employees
  if (method === "GET" && url === "/employees") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employees));
  }
};

//3.Create the server
const server = http.createServer(requestHandler);

//4. Start our server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`The server is runnig on http://localhost:${PORT}`);
});
