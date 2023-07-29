let gV = "This is the global variable";

function Fact(num) {
let lV = "This is the local variable";

if (num === 0 || num === 1) {
return 1;
} else {
return num * Fact(num - 1);
}
}

function ScopeOfVariable() { console.log("Accessing the global variable:", gV);

// console.log("Trying to access the local variable:", lV);
// accessing the local variable will give the error
}
const num = 5;
console.log(`Factorial of ${num} is:`, Fact(num)); ScopeOfVariable();
console.log("Prepared by:Ekta_21ce132");
