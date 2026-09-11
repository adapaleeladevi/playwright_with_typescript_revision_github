// arrow /lambda function

// arrow function with no params & no return type

let x=():void=>
{
    console.log("hello im lamda /arrow function")
}

x();

// arrow function with params & with return type

let additionOfNumber=(num1:number,num2:number):number=>
{
    let sum=num1+num2;
    console.log("sum of 2 numbers is ",sum)
    return sum
}

additionOfNumber(20,40);
