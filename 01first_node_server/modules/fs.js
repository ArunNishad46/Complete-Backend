const fs = require('fs')

// fs.readFile('file.txt', 'utf8', (error, data) => {
//   if(error){
//     console.log(error)
//     return
//   }
//   console.log(data)
// })

// const fileContent = fs.readFileSync('file.txt', 'utf8')
// console.log(fileContent)

// fs.writeFile('text.txt', 'Welcome to node tutorial', err => {
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('File written successfully!')
// })

// fs.writeFileSync('text2.txt', 'Hellooo')
// console.log('File written successfully!')

// fs.stat('file.txt', (err, stats) => {
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(stats)
// })

// const stats = fs.statSync('text.txt')
// console.log(stats)

// fs.mkdir('newDirectory', err => {
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('Directory Created')
// })

// fs.rmdir('newDirectory', err => {
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log('Directory Removed')
// })

fs.unlink('text2.txt', err => {
  if(err){
    console.log(err)
    return
  }
  console.log('file deleted')
})

fs.unlinkSync('text.txt')
console.log('done...')
