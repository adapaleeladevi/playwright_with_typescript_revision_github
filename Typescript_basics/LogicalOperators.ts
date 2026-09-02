// Logical operator

let isAdmin: boolean = true;
let isLoggedIn: boolean = false;
let isNotAdmin: boolean = false;
let isNotLoggedIn: boolean = true;

console.log(isAdmin && isLoggedIn); // false
console.log(isNotAdmin && isLoggedIn); // false
console.log(isAdmin && isNotLoggedIn);  // true
console.log(isNotAdmin && isNotLoggedIn);  // false

console.log(isAdmin || isLoggedIn); // true
console.log(isNotAdmin || isLoggedIn); // false
console.log(isAdmin || isNotLoggedIn);  // true
console.log(isNotAdmin || isNotLoggedIn);  // true
