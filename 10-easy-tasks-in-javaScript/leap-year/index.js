// Leap year

function checkLeapYear(year){
    if(year %4==0 && year %400!=0 || year %400==0){
        return year + " " +"Leap Year";
    }else{
        return year + " " + "Not a Leap Year";
    }
}



let year=Number(prompt("Check your leap year"));

console.log(checkLeapYear(year));