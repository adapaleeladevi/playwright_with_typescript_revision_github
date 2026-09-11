// named function with optional parameters 


function displayDetails(id:number,name:string,mailid?:string,busNumber?:number):void{

    console.log("Student Id: ",id)
    console.log("Studemt Name: ",name)
    console.log("Student Email: ",mailid)
    console.log("Student bus number: ",busNumber)
}

displayDetails(100,"Playwright","play@gmail.com")
displayDetails(101,"Typescript")