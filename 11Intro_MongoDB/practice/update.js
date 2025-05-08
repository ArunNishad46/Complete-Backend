const {dbConnection} = require('./db')

const updateQuery = async () => {
  try{
    const db = await dbConnection()
    const collection = db.collection('Users')

    const updatedResult = await collection.updateMany({name:"Ayush"},{$set:{age:22}})
    console.log(updatedResult.modifiedCount)
  }catch(error){
    console.log(error)
  }
}

updateQuery()
