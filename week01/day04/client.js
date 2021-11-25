// Making a request (http) to a server takes time
// Javascript cannot wait on stuff in normal context
// We can define a function as async, that CAN wait for stuff

const axios = require('axios')

async function getHello(id) {
    // wait till this promise returns a result
    console.log('waiting') // second
    try {
        const cow = await axios.get(`http://localhost:5065/characters/${id}`)
        console.log(cow.data) // third
    } catch (error) {
        console.log('We had an error')
        console.log(error.message)
    }

}

console.log('before request') // first
getHello(3)
console.log('after request') //fourth
    // We expect 'Hello, swen'
















// // In what order are these lines executed? 
// // Answer: Top to bottom
// // Line-by-line analysis
// // order: 5, 6, 7, 9, 10, 5, 6, 11
// function add(x, y) {
//     return x + y
// }

// const amount = 5;
// const result = add(amount, 10);
// console.log(result)