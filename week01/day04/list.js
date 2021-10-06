// function double(num) {
//     function x (){ console.log('Im x')};
//     x();
//     console.log(num * 2);

    
// }

// double(5);

const capitals = ['A', 'B', 'C']

capitals.forEach((el, ix) => capitals[ix] = el + '1' )
console.log(capitals);

for (let i = 0; i < capitals.length; i ++) {
    capitals[i] = capitals[i] + '1';
}
console.log(capitals);