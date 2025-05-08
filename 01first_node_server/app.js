const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req)
  process.exit()  //stops event loop
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})


