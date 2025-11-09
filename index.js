const http = require('http'); // Import the HTTP module and put inside http variable so we can use later

// Create an HTTP server that listens on port 3000

const server = http.createServer((req, res) => { //this function creates a web server.
  res.statusCode = 200; // Set the response status code to 200 (OK)
  res.end('Hello, World!\n'); // Send the response body "Hello, World!" and end the response
});

server.listen(3000, () => { // The server listens on port 3000
  console.log('Server running at http://localhost:3000/');
}); 