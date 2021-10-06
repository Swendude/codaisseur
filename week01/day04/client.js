const teachers = require('./teacher')

console.log(`${teachers} is a teacher`);

// // // console.log(JSON.stringify({name:'Karla', teaching:true})); // serializing



// const axios = require('axios')

// async function getTeachers () {
//     try {
//         const response = await axios.get('http://localhost:3000/teachers');
//         const teachers = response.data;
//         console.log(teachers[0].name);
//     } catch (error) {
//         console.log('error:', error.message);
//     }
  
// }

// getTeachers();

// // const languages = {spain: 'Spanish',
// // france: 'French',
// // germany: 'German'
// // }

// // const json = JSON.stringify(languages)

// // const data = JSON.parse(json)

// // console.log(data.france)