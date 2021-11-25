const person = {
    name: 'Karla',
    gender: 'f',
    job: 'teacher'
}
const jsonrepr = '{"name":"Karla","gender":"f","job":"teacher"}'
const jsrepr = JSON.parse(jsonrepr)
console.log(jsrepr.name)
    // const jsonperson = JSON.stringify(person)
    // console.log(jsonperson)


// try {
//     person.map(() => true);
// } catch (error) {
//     console.log('I cannot map this')
//     console.log(error)
// }

// console.log('I am done')

// function divideByThreeIfPositive(x) {
//     if (x > 0) {
//         return (x / 3)
//     } else {
//         return x
//     }
// }

// const arrowDivideByThreeIfPositive = (x) => {
//     if (x > 0) {
//         return (x / 3)
//     } else {
//         return x
//     }
// };
// const arrowDivideByThree = (x) => x / 3;

// console.log(divideByThreeIfPositive(9));
// console.log(divideByThreeIfPositive(12))
// console.log(divideByThreeIfPositive(21));