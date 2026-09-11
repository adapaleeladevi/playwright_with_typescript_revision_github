// named function with Rest param with multiple type of params with return type

function findElements(...elements:(number|string)[]):number{

    console.log("number of elements are ",elements.length);
    return(elements.length)
}

findElements("playwright",12,"typescript",2,3,4,"batch")
findElements("playwright","typescript",2,4,"batch")