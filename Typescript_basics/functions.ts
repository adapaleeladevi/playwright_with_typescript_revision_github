

function sum(){
    console.log("sum function with no return type");
}

function addition(a:number,b:number){
    console.log("function with parameter with no return types",a+b);
}

function addition1(a:number,b:number):number{
    let c=a+b;
    return c;

}

function addition2(a:number,b:number):void{
    console.log("function with parameters with void as return types",a+b);
}

function addition3(a:number,b:number,c:number):void{
    console.log("function with parameters with void as return types",a+b+c);
}


sum();
addition(10,20);
//let x:number=addition1(20,30);
console.log("function with parameters with return types",addition1(20,30));
addition2(40,50);
addition3(40,50,addition1(20,30));


