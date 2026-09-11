// named function with default params

// function calculateDiscount(price:number,rate:number):void{
//     let discount:number=price*rate;
//     console.log("Discount amount is ",discount)
// }

function calculateDiscount(price:number,rate:number=0.50):void{
    let discount:number=price*rate;
    console.log("Discount amount is ",discount)
}

calculateDiscount(5000)
calculateDiscount(10000,0.30)