// nested if statement

// if (x>0){
//     if(x/2==0){
//         console.log("x is even number");
//     }
//     else{
//         console.log("x is odd number");
//     }
// }


// grade A, grade B, grade C, grade D, grade F
let x=60;

if(x>=30){
    console.log("Passed");
    if(x>=90){
        console.log("grade A +");
    }
    else if(x>=80 && x<90){
        console.log("grade A");
    } 
    else if(x>=70 && x<80){
        console.log("grade B");
    }
    else if(x>=60 && x<70){
        console.log("grade C");
    }
    else if(x>=50 && x<60){
        console.log("grade D");
    }
}
else{
    console.log("Failed");
}
