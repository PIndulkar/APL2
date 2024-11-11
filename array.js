let fruits = ['Apple', 'Banana', 'Cherry'];

console.log('Initial array:', fruits);

fruits.push('Dragonfruit');
console.log('After adding Dragonfruit:', fruits);

let removedFruit = fruits.pop();
console.log('Removed fruit:', removedFruit);
console.log('After removing last fruit:', fruits);

console.log('Fruits in the array:');
fruits.forEach(fruit => {
    console.log(fruit);
}
);
