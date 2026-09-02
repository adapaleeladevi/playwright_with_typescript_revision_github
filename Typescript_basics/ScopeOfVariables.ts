

// var is function scope
// let & const are blocked scope

function sum(){
      var a=10;
      let x=20;
    if(true){
          
            let b=20;
            const c=30;
            let y=a+b+c+x;
            console.log("the value of y is ",y);
            // console.log("the value of c is ",c);
    }
    console.log("the value of a is ",a);
    console.log("the value of ",b);
    console.log("the value of ",c);
}

sum();