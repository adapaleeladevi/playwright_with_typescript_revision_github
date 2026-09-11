//for of loop -> used to iterate Array

// let x1=[1,2,3,4,56,]
// for(let y of x1){
//     console.log(y)
// }

//for in loop -> used to iterate Objects

// let z:{name:string,language:string,batchNo:number}={name:"Playwright",language:"Typescript",batchNo:271}
// for(let i in z){
//     console.log(i + ": " + z[i]);
// }

// break 

// for(let i=0;i<=5;i++){
//     if(i===3){
//         break;
//     }
//     console.log(i); // 0, 1,2
// }

for(let i=0;i<=5;i++){
    if(i===3){
        continue;
    }
    console.log(i); // 0, 1,2,4,5
}

