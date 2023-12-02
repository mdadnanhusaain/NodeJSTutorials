const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);

  if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end(
      "<h1> About NodeJS tutorials with CodeWithHarry</h1><p>I am still learning</p>"
    );
  } else if (req.url == "/hello") {
    res.statusCode = 200;
    res.end(
      "<h1> This is NodeJS tutorials with CodeWithHarry</h1><p>I am learning how to use NodeJS</p>"
    );
  } else {
    res.statusCode = 404;
    res.end(
      "<h1>Page Not Found</h1><p>No webpage has been designed on this url</p>"
    );
  }
});

server.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
