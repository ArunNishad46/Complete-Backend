const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
  
  if(req.url === '/home'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome To Home Page</h1>')
    return res.end()
  }else if(req.url === '/about'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome To About Page</h1>')
    return res.end()
  }else if(req.url === '/men'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome To Men Page</h1>')
    return res.end()
  }else if(req.url === '/women'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome To Women Page</h1>')
    return res.end()
  }else if(req.url === '/kids'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome To Kids Page</h1>')
    return res.end()
  }else if(req.url === '/cart'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome To Cart Page</h1>')
    return res.end()
  }else if(req.url === '/login'){
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Welcome To Login Page</h1>')
    return res.end()
  }
  res.setHeader('Content-Type', 'text/html')
  res.write(`
    <nav style="display: flex; align-items: center; justify-content: center; height: 40px; width: 100%; background-color:darkblue; padding: 10px 0px;border-radius: 10px;">
      <a style="text-decoration: none; color: #fff; font-size: 24px; font-weight: bold; margin: 5px 20px; padding: 5px 10px;" href="/home">Home</a>
      <a style="text-decoration: none; color: #fff; font-size: 24px; font-weight: bold; margin: 5px 20px; padding: 5px 10px;" href="/about">About</a>
      <a style="text-decoration: none; color: #fff; font-size: 24px; font-weight: bold; margin: 5px 20px; padding: 5px 10px;" href="/men">Men</a>
      <a style="text-decoration: none; color: #fff; font-size: 24px; font-weight: bold; margin: 5px 20px; padding: 5px 10px;" href="/women">Women</a>
      <a style="text-decoration: none; color: #fff; font-size: 24px; font-weight: bold; margin: 5px 20px; padding: 5px 10px;" href="/kids">Kids</a>
      <a style="text-decoration: none; color: #fff; font-size: 24px; font-weight: bold; margin: 5px 20px; padding: 5px 10px;" href="/cart">Cart</a>
      <a style="text-decoration: none; color: #fff; font-size: 24px; font-weight: bold; margin: 5px 20px; padding: 5px 10px;" href="/login">Login</a>
    </nav>
  `)
  res.end()
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
  
})







