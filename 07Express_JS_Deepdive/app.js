const express = require('express');  // External Module
const bodyParser = require("body-parser")

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method);
//   res.send("<h1>Welcome to My Page</h1>")
// });

app.get('/', (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to My Page</h1>`)
})

app.get('/contact-us', (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Please Submit your details</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" /></br></br>
      <input type="email" name="email" placeholder="Enter your email" /></br></br>
      <input type="submit" value="Submit" />
    </form>
  `)
})

app.use(bodyParser.urlencoded())

app.post('/contact-us', (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.send('<h1>Thanks for your details, We will contact you shortly</h1>')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on address: http://127.0.0.1:${port}`);
});