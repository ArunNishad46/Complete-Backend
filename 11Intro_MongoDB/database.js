const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017";

const dbName = "MyDatabase";
const client = new MongoClient(url)

const dbConnection = async () => {
  try{
    await client.connect()
    console.log("Connected successfully to Database")
    const db = client.db(dbName)
    return db
  }catch(error){
    console.log(error)
  }
}

module.exports = {dbConnection}
