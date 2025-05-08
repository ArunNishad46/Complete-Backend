const {dbConnection} = require('./db')

const deleteQuery = async () => {
  try{
    const db = await dbConnection()
    const collection = db.collection('Users')

    const deleteResult = await collection.deleteMany({name:"Arun"})
    console.log(deleteResult.deletedCount)
  }catch(error){
    console.log(error)
  }
}

deleteQuery()