const express = require('express')
const connectDB = require('./Database/dbConnection')
const Users = require('./Database/user')
const cors = require('cors')

const app = express()
const port = 3000;

//Enable CORS
app.use(cors())

// Middleware for parsing json
app.use(express.json())

//DB connect
connectDB();

//Registration
app.post('/register', async (req, res) => {
  try{
    const {username, email, password} = req.body;
    const userExist = await Users.findOne({username});
    if(userExist){
      return res.status(400).json({message:"User already exists"})
    }
    const user = new Users({username, email, password})
    await user.save();
    res.status(201).json({message:"User registered successfully"})
  }catch(error){
    res.status(500).json({error:"User registration failed!"})
  }
})

//Login
app.post('/login', async (req, res) => {
  try{
    const {username, password} = req.body;
    const user = await Users.findOne({username})
    console.log(user)
    if(!user || user.password !== password){
      return res.status(401).json({message:"Invalid username or password"})
    }
    res.status(200).json({message:"Login Successful"})
  }catch(error){
    res.status(500).json({message:"Login Failed!"})
  }
})

app.listen(port, () => {
  console.log(`Server running on address http://127.0.0.1:${port}`)
})