// compare_two_numbers_and_print_the_larger_one

function compare_two_numbers_and_print_the_larger_one(num1:number,num2:number):number
{
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

console.log(compare_two_numbers_and_print_the_larger_one(10,20));