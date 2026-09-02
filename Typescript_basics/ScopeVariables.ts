// var is function scope

function sum(){
    var a=10;
    var b=20;
    var c= a+b;
    console.log(c);
}

// sum();
// console.log(c);// throw error as it is outside the function 



// let is blocked scope

function add(){
    var a=10;
    
}

let b=20;
let c=a+b;
    console.log(c);




// function exampleVar() 
// {
//     if (true) 
//         {
//             var message = "Hello, World!";
//         }
//         console.log(message); // Works! (function-scoped)
// }
// exampleVar(); // Output: "Hello, World!"


var message = "Hello, World!";
function exampleVar() 
{
    //var message = "Hello, World!";
    if (true) 
        {
           console.log(message); // Works! (function-scoped)
        }
}
exampleVar(); // Output: "Hello, World!"






