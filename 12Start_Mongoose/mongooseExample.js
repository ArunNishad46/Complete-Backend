const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
  name:String,
  age:Number,
})

const UsersModel = mongoose.model('Users', UsersSchema)

const dbConnection = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/MyDatabase')
  console.log("Connected to Mongodb")

  const newData = new UsersModel({
    name:"Jhonson",
    age:40
  })
  await newData.save()
  console.log('Data added Successfully')
}

dbConnection()

