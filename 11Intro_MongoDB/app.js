const express = require('express')
const {dbConnection} = require('./database')

const app = express()
const port = 3000;

//get
app.get('/', async (req, res) => {
  try{
    const db = await dbConnection()
    const collection = db.collection('Users')
    const users = await collection.find().toArray()
    res.json(users)
  }catch(error){
    console.log(error)
    res.status(500).json({error: "Internal Server Error"})
  }
})

app.use(express.json())  // post-api testing - postman
//post
app.post('/users', async (req, res) => {
  try{
    console.log(req.body)  // post-api testing - postman
    const db = await dbConnection()
    const collection = db.collection('Users')
    let result = collection.insertOne(req.body)
    res.json(result)
  }catch(err){
    console.log(err)
  }
})

//put-update
// app.put('/users', async (req, res) => {
//   try{
//     const db = await dbConnection()
//     const collection = db.collection('Users')
//     let singleData = collection.updateOne({name:"Rock"},{$set:{name:"Jhonson", age:40}})
//   }catch(err){
//     console.log(err)
//   }
// })
app.put('/users/:name', async (req, res) => {
  try{
    console.log(req.params)
    console.log(req.body)
    const db = await dbConnection()
    const collection = db.collection('Users')
    let singleData = collection.updateOne({name:req.params.name},{$set:req.body})
    res.send("Updated")
  }catch(err){
    console.log(err)
  }
})

//delete
app.delete('/users/:name', async (req, res) => {
  try{
    const db = await dbConnection()
    const collection = db.collection('Users')
    const username = req.params.name;
     await collection.deleteOne({name:username})
    res.send("Deleted")
  }catch(err){
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Server running on address http://127.0.0.1:${port}`)
})




