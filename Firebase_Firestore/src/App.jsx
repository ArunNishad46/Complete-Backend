import React from 'react'
import { getFirestore, collection, addDoc, getDoc, doc, query, where, getDocs } from 'firebase/firestore'
import { app } from './firebase'

const db = getFirestore(app);

function App() {

  const writeData = async () => {
    try{
      const result = await addDoc(collection(db, 'users'), {
        name: "Arun",
        age: 20,
        sex: "male",
        city: "meerut"
      });
      console.log(result)
    }catch(error){
      console.log(error.message)
    }
  }

  const makeSubCollection = async () => {
    try{
      const result = await addDoc(collection(db, 'users/kJGfz0XLmQyXTPo05Y7c/purchases'), {
        product: "Macbook",
        price: 120000,
        payment: "debit card"
      })
      console.log(result)
    }catch(error){
      console.log(error.message)
    }
  }

  const getDocument = async () => {
    const ref = doc(db, 'users', 'kJGfz0XLmQyXTPo05Y7c');
    const snap = await getDoc(ref)
    console.log(snap.data())
  }

  const getAllDocument = async () => {
    const q = query(collection(db, "users"), where("age", "==", 20));
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }

  return (
    <div className='flex flex-col items-center justify-center h-[150px] gap-6'>
      <h1 className='text-2xl font-bold underline'>Firebase Firestore</h1>
      <div>
        <button onClick={writeData} className='text-lg font-bold text-white bg-green-600 px-2 py-1 rounded-lg cursor-pointer m-2'>Write Data</button>
        <button onClick={makeSubCollection} className='text-lg font-bold text-white bg-green-600 px-2 py-1 rounded-lg cursor-pointer m-2'>Write Sub Data</button>
        <button onClick={getDocument} className='text-lg font-bold text-white bg-green-600 px-2 py-1 rounded-lg cursor-pointer m-2'>Get Document</button>
        <button onClick={getAllDocument} className='text-lg font-bold text-white bg-green-600 px-2 py-1 rounded-lg cursor-pointer m-2'>Get All Document</button>
      </div>
    </div>
  )
}

export default App