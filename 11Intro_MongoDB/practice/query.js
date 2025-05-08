const {dbConnection} = require('./db')

const main = async () => {
  try{
    const db = await dbConnection();
    const collection = db.collection('Users')

    const findResult = await collection.find().toArray();
    console.log(findResult)
  }catch(error){
    console.log('Error performing the query:', error)
  }
}

main()

