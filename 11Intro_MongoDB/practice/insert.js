const {dbConnection} = require('./db')

const insertQuery = async () => {
  try{
    const db = await dbConnection();
    const collection = db.collection('Users')
  
    const data = [
      {name:"Ayush", age:24},
      {name:"Mohit", age:20}
    ]
  
    const insertResult = await collection.insertMany(data)
    console.log(`${insertResult.insertedCount} documents inserted.`)
  }catch(error){
    console.log(error)
  }
}

insertQuery()

