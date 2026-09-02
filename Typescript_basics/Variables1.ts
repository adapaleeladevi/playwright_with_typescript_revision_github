let a=10;

let b:number=10;
let c:string="hello";
let d:boolean=true;

let x=[10,20,30,40];        // number array
let x1:number[]=[10,20,30,40];   // number array -> correct way
let y=["hi","hello","bye"];  // string array
let y1:string[]=["hi","hello","bye"];  // string array

let z:[string,number,boolean]=["hello",10,true];  //tuple
let w:[string,number]=["typescript",100];

let user: { name: string; age: number } = { name: "Nag", age: 25 }; //object
//let user1: { name: string; age: number } = { name: 25, age: "25" }; //object -> wrong way

let z1:[string,number,string]=["hello",10,"world"];  //tuple


let z2:[string,number,number]=["Nag",25,9876543210];  //tuple

let user1: { StudentName: string; StudentRollNumber: number;StudentPhoneNumber:number } 
= { StudentName: "Nag", StudentRollNumber: 25, StudentPhoneNumber:9876543210 }; //object


b=123; //will work
b="world"; //will not work

c=100;

d="true";

console.log("the value of b is ",b);
