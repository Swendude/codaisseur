const countries = {
    italy: 'pasta',
    japan: 'sushi',
    germany: 'bratwurst',
    russia: 'bliny',
    netherlands: 'stampot',
    portugal: 'cod with cream'
}
// .map((el) => `Favorite food of ${el}`
console.log(Object.keys(countries))
console.log(Object.values(countries))
console.log(Object.entries(countries))

const pairs = Object.entries(countries);
const messages = pairs.map((pair) => `${pair[1]} is the favorite food of ${pair[0]}`)

console.log(messages);
console.log(messages.join(". "));
console.log([1,2,3].join(". "));