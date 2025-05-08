const express = require('express')

const app = express()
const port = 3000;

app.use(express.static('public'))
app.use(express.urlencoded())

let book = [
  {id:1, title:"Book 1", author: "Author 1"},
  {id:2, title:"Book 2", author: "Author 2"}
]

app.get('/books', (req, res) => {
  res.json(book)
})

app.post('/books', (req, res) => {
  console.log(req.body)
  const newBook = {
    id: book.length + 1,
    title: req.body.title,
    author: req.body.author
  }
  book.push(newBook)
  res.status(201).json(book)
})

app.listen(port, () => {
  console.log(`Server running on address http://127.0.0.1:${port}`)
})