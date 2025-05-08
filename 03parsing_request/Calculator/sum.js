const sumRequestHandler = (req, res) => {
  const body = []
  req.on('data', chunk => body.push(chunk))
  req.on('end', () => {
    const fullBody = Buffer.concat(body).toString()
    const params = new URLSearchParams(fullBody)
    const bodyObj = Object.fromEntries(params)
    console.log(bodyObj)
    const result = parseInt(bodyObj.first) + parseInt(bodyObj.second)
    console.log(result)

    res.setHeader('Content-Type', 'text/html')
    res.write(`
      <h1>Your Sum is ${result}</h1>
      <a href="/"><button>Go To Home</button></a>
      <a href="/calculator"><button>Go To Calculator</button></a>
    `)
    return res.end()
  })
}

exports.sumRequestHandler = sumRequestHandler