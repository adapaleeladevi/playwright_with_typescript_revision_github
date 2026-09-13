// check_if_a_number_is_a_multiple_of_given_number

function check_if_a_number_is_a_multiple_of_given_number(multiple:number,givenNumber:number):boolean
{
    if(givenNumber%multiple==0){
        return true;
    }
    return false;
}

console.log(check_if_a_number_is_a_multiple_of_given_number(10,100));