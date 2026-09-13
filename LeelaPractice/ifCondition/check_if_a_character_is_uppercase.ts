// check_if_a_character_is_uppercase

function checkUpperOrNot(givenCharacter:string):boolean
{
    return (givenCharacter===givenCharacter.toUpperCase() && givenCharacter!=givenCharacter.toLowerCase());
}

console.log(checkUpperOrNot("l"));
console.log(checkUpperOrNot("L"));
console.log(checkUpperOrNot("LEELA"));
console.log(checkUpperOrNot("leela"));
console.log(checkUpperOrNot("Leela"));


