// arrow function with implicit return

// let additionOfNumber1=(num1:number,num2:number):number=>
// {
//     let sum=num1+num2;
//     console.log("sum of 2 numbers is ",sum)
//     return sum
// }

let addition =(a:number,b:number):number=>a+b;
let multiply =(a:number,b:number):number=>a*b;

console.log(addition(23,12));
console.log(multiply(2,3))

// arrow function with optianl parmaters 

// function displayDetails(id:number,name:string,mailid?:string,busNumber?:number):void{

//     console.log("Student Id: ",id)
//     console.log("Studemt Name: ",name)
//     console.log("Student Email: ",mailid)
//     console.log("Student bus number: ",busNumber)
// }


let displayDetails=(id:number,name:string,mailid?:string,busNumber?:number):void=>
{
    console.log("Student Id: ",id)
    console.log("Studemt Name: ",name)
    console.log("Student Email: ",mailid)
    console.log("Student bus number: ",busNumber)
}

displayDetails(10,"hello","asdf@gmail.com")
displayDetails(20,"bye")