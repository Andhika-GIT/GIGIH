const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Home page");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("About page");
  } else {
    res.statusCode = 400;
    res.end("Page Not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
