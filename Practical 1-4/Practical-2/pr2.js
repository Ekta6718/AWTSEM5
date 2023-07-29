var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.length);

console.log(arr[0]);
console.log(arr[1]);
console.log("\nPush array");
console.log(arr.push(10));
console.log(arr);

console.log("\nPop array");
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log("\nShift arr");
console.log(arr);
console.log(arr.shift());
console.log(arr);

console.log("\nUnshift arr");
console.log(arr);
console.log(arr.unshift(0));
console.log(arr);

console.log("\nJoin array");

console.log(arr);
console.log(arr.join("~"));
console.log(arr);

console.log("\nConcat arr");
console.log(arr);
console.log(arr.concat([13, 14, 15]));
console.log(arr);

console.log("\nFlat array");
console.log(arr);
arr = [1, 2, 3, [4, 5, 6], [7, 8, 9]];

console.log(arr.flat());
console.log(arr);

console.log("\nSplice array");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);
arr.splice(1, 11, 999);
console.log(arr);

console.log("\nSlice array");
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);
console.log(arr.slice(2, 4));
console.log(arr);

console.log("\nDelete from arr");
console.log(arr);
delete arr[6];
console.log(arr);

const Obj = { name: "Ekta", age: 20, gender: "Female", city: "Tokyo" };
const Display = (obj) => { var c = 0
    for (let i in obj)
    {
    console.log((c+1) + " " + obj[i]); c++;
    }
    }
    
    Display(Obj)
    
