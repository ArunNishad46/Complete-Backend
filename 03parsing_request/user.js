const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.setHeader("Content-Type", 'text/html')
    res.write('<h1>Welcome to Home page</h1>')
    return res.end()
  }else if(req.url.toLowerCase() === '/login'){
    res.setHeader("Content-Type", 'text/html')
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
  }else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
    let body = []
    req.on('data', chunk => {  //reading chunks
      console.log(chunk)
      body.push(chunk)  //buffering chunks
    })
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString()
      console.log(fullBody)
      const params = new URLSearchParams(fullBody)
      console.log(params)
      const bodyObj = Object.fromEntries(params) //parsing data
      console.log(bodyObj)
      fs.writeFileSync("user.txt", JSON.stringify(bodyObj))
    })
    res.statusCode = 302  //302 => redirecting code
    res.setHeader('location', '/')
  }
  res.setHeader("Content-Type", 'text/html')
  res.write(`
    <h1>404 Page Not Found</h1>
    <a href="/"><button>Go To Home</button></a>
  `)
  res.end()
})

const PORT = 3001
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})


//important topics for reading parsing request
//1. Streams
//2. Chunks
//3. Buffers
//4. Reading chunk
//5. Buffering chunks
//6. Parsing request