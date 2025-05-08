const express = require('express')
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/MyDatabase")

const BookSchema = new mongoose.Schema({
  title:String,
  author:String,
  price:Number
})

const Books = mongoose.model("Books", BookSchema)

const app = express()

//get
app.get('/books', async (req, res) => {
  try{
    const books = await Books.find()
    res.json(books)
  }catch(err){
    res.status(500).json({err:"Internal Server Error"})
  }
})

//middleware
app.use(express.json())
//post
app.post('/books', async (req, res) => {
  console.log(req.body)
  try{
    const {title, author, price} = req.body
    const newBook = new Books({title, author, price})
    await newBook.save()
    res.status(201).json(newBook)
  }catch(error){
    res.status(500).json({error:"Internal Server Error"})
  }
})

//put
app.put('/books/:id', async (req, res) => {
  console.log(req.params)
  try{
    const {id} = req.params
    const {title, author, price} = req.body
    const updatedBook = await Books.findByIdAndUpdate(id, {title, author, price})
    res.json(updatedBook)
  }catch(error){
    res.status(500).json({error:"Internal Server Error"})
  }
})

//delete
app.delete('/books/:id', async (req, res) => {
  const {id} = req.params
  await Books.findByIdAndDelete(id)
  res.sendStatus(204)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})