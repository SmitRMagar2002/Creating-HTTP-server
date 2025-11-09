# 01 – Create HTTP Server (Node.js)

A tiny Node.js app that creates a basic HTTP server and responds with **“Hello, World!”**.  
This section shows how to use Node’s built-in `http` module without any frameworks.

## 🧠 What I Learned
- Importing core modules with `require('http')`
- Creating a server: `http.createServer((req, res) => { ... })`
- Setting status codes and sending responses with `res.statusCode` and `res.end()`
- Starting a server on a port with `server.listen(3000, cb)`
- Basic request/response flow (req = incoming request, res = outgoing response)
