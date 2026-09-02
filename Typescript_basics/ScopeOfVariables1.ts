sum123();

// var a=10;
// let b=20;
// const c=30;

function sum123(){
    if(true){
            var x=50;
            let y=60;
            const z=70;
            // console.log("the value of a is ",a);  // blocked scope
            // console.log("the value of b is ",b);
            // console.log("the value of c is ",c); 
            console.log("the value of x is ",x); 
            console.log("the value of y is ",y);
            console.log("the value of z is ",z); 
    }
   console.log("the value of x is ",x);  // function scope
//    console.log("the value of y is ",y);
//     console.log("the value of z is ",z); 
}

//sum();