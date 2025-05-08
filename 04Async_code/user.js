const fs = require('fs')

const requestHandler = (req, res) => {
  console.log(req.url, req.method)
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome to Home page</h1>')
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
  }else if(req.url.toLowerCase() === '/submit-details' && req.method == 'POST'){
    const body = []
    req.on('data', chunk => {  //reading chunks
      console.log(chunk)
      body.push(chunk)   //buffering chunks
    })
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString()
      console.log(fullBody)
      const params = new URLSearchParams(fullBody)
      // const bodyObj = {};
      // for(const [key, value] of params.entries()){
      //   bodyObj[key] = value;
      // }
      const bodyObj = Object.fromEntries(params) //parsing data
      console.log(bodyObj)
      fs.writeFile('user.txt', JSON.stringify(bodyObj), msg => {
        console.log("Data written successfully");
        res.statusCode = 302  //302 => redirecting code
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }else{
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>My First Page</h1>')
    res.end()
  }
}

module.exports = requestHandler





