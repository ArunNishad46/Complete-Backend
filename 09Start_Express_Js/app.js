const express = require('express')
const path = require('path')
const data = require('./data')

const app = express()
const port = 3000;

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome to Homepage</h1>')
})

app.get('/contact', (req, res, next) => {
  res.send('<h1>Welcome to Contact</h1>')
})

app.get('/about', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'about.html'))
})

// app.get('/users', (req, res, next) => {
//   res.json([
//     {
//       name: "John",
//       email: "john123@yahoo.com"
//     },
//     {
//       name: "Arun",
//       email: "arun123@google.com"
//     },
//     {
//       name: "Sumit",
//       email: "sumit123@gmail.com"
//     },
//     {
//       name: "Chandan",
//       email: "chandan47636@yahoo.com"
//     },
//     {
//       name: "Shivam",
//       email: "shivam123@google.com"
//     }
//   ])
// })

// app.get('/api/users/data', (req, res, next) => {
//   const filteredData = data.map(user => {
//     const {id, name} = user;
//     return {id, name}
//   })
//   res.json(filteredData)
// })

// app.get('/api/user/:userId', (req, res) => {
//   console.log(req.params)
//   const {userId} = req.params;
//   const singleUser = data.find((user) => user.id === Number(userId))
//   if(!singleUser){
//     res.status(404).send("User Not Found!")
//   }
//   res.json(singleUser);
// })

app.get('/api/u1/query', (req, res) => {
  console.log(req.query)
  let shortedUser = [...data];
  const {search, limit} = req.query;

  if(search){
    shortedUser = shortedUser.filter(user => {
      return user.name.toLowerCase().startsWith(search)
    })
  }
  res.json(shortedUser);
})

app.listen(port, () => {
  console.log(`Server running on address http://127.0.0.1:${port}`)
})


