// The let keyword
let x = 10;
if (x === 10) {
let x = 20; console.log(x); // 20
}
console.log(x); // 10

// The const keyword const PI = 3.14; console.log(PI); // 3.14
// PI = 3.1415 // TypeError: Assignment to constant variable.

// Arrow Functions
const sumArrow = (a, b) => a + b;
 console.log(sumArrow(5, 10));

// The (Spread Of) ... Operator
const arr = [1, 2, 3, 4, 5];
console.log(...arr);

// For/of
const arr1 = [1, 2, 3, 4, 5]; 
for (let i of arr) {
console.log(i);
}

// Map Objects
const map = new Map(); 
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
console.log(map.get('a'));

// Set Objects
const set = new Set(); 
set.add(1);
set.add(2);
set.add(3);
 console.log(set.has(1));

// Classes
class Rectangle { constructor(height, width) {
this.height = height; 
this.width = width;
}
}
const rect = new Rectangle(10, 20);
 console.log(rect.height);

// Promises
const promise = new Promise((resolve, reject) => { setTimeout(() => {
resolve('Success!');
}, 1000);
}
);
promise.then((value) => 
{
     console.log(value);
}
);

// Symbol
const sym = Symbol('µτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙√'); 
console.log(sym); // Symbol(µτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙√)

// Default Parameters
const SumDefaultValue = (a, b = 10) => a + b; 
console.log(SumDefaultValue(5)); // 15

// Function Rest Parameter
const restParameter = (...args) => 
{ let total = 0;
for (let i of args) 
{ 
    total += i;
}
return total;
}
console.log(restParameter(1, 2, 3, 4, 5));
console.log("Prepared by:Ekta_21ce132");


