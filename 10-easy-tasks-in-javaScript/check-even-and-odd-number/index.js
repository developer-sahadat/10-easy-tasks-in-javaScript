


//Event Number

function checkEventNumber(number){
    if(number %2==0){
       return "Event Number"
    }else{
       return "Not Event Number"
    }
}


let eventNumber=Number(prompt("Enter your number and check even or odd your number"));

console.log(checkEventNumber(eventNumber));



//Odd Number

function checkOddNumber(number){
    if(number %2!=0){
       return "Odd Number"
    }else{
       return "Not Odd Number"
    }
}


let oddNumber=Number(prompt("Enter your number and check even or odd your number"));

console.log(checkOddNumber(oddNumber));