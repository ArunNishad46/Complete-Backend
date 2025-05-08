// Connect NodeJS to MongoDB

const {MongoClient} =  require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)
const dbName = 'MyDatabase';

const dbConnection = async () => {
  try{
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName)
    return db;
  }catch(error){
    console.log('Failed to connect to the database:', error);
    throw error;
  }
} 

module.exports = {dbConnection}


