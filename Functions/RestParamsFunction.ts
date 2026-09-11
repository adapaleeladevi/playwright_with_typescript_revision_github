// named function with Rest param with same type of params with return type

function sumOfNumbers(...nums:number[]):number{
    
    let sum:number=0;

    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }

    console.log("sum of ",nums.length," digits is ",sum);
    return(sum)
}

sumOfNumbers(30,20,80,90,4,5,3)
sumOfNumbers(5,7,3)