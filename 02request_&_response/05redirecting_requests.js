const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome to Home page</h1>')
    return res.end()
  }else if(req.url === '/products'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Checkout our products</h1>')
    return res.end()
  }else if(req.url === '/login'){
    res.setHeader('Content-Type', 'text/html')
    res.write(`
      <h1>Enter Your Details</h1>
      <form action="/submit-details" method="POST">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" placeholder="Enter your name">
        <br>
        <br>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Enter your email">
        <br>
        <br>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Enter your password">
        <br>
        <br>
        <label for="gender">Gender:</label>
        <input type="radio" name="gender" id="male" value="male">
        <label for="male">Male</label>
        <input type="radio" name="gender" id="female" value="female">
        <label for="female">Female</label>
        <br>
        <br>
        <button type="submit">Submit</button>
      </form>
    `)
    return res.end()
  }else if(req.url === '/submit-details' && req.method == 'POST'){
    fs.writeFileSync('user.txt', 'Arun Kumar')
    res.statusCode = 302  //302 => redirecting code
    res.setHeader('Location', '/')
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>My First Page</h1>')
  res.end()
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
})


