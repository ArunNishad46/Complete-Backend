const {sumRequestHandler} = require('./sum')

const requestHandler = (req, res) => {
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html')
    res.write(`
      <h1>Welcome To Calculator</h1>
      <a href="/calculator"><button>Go To Calculator</button></a>
    `)
    return res.end()
  }else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type', 'text/html')
    res.write(`
      <h1>Here is the Calculator</h1>
      <form action="/calculate-result" method="POST">
        <input type="text" name="first" placeholder="Enter first number" />
        <br><br>
        <input type="text" name="second" placeholder="Enter second number" />
        <br><br>
        <input type="submit" value="Sum" />
      </form>
    `)
    return res.end()
  }else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req, res);
  }
  res.setHeader('Content-Type', 'text/html')
  res.write(`
    <h1>404 Page Not Found</h1>
    <a href="/"><button>Go To Home</button></a>
  `)
  res.end()
}

exports.requestHandler = requestHandler
