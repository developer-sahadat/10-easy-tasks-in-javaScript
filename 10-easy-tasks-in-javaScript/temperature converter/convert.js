// feet to meters

/*
function feetToMellers(feet){
    let meters=feet/3.281;
    return meters
};

let feet=Number(prompt("Enter a Feet"));

console.log(feetToMellers(feet).toFixed(3));

*/



// millimeters to foot

/*
function millimetersToFoot(mill){
    let foot=mill/305;

    return foot;
};


let millimeters=parseFloat(prompt("Enter a Millimeters to cnvert foot"));

console.log(millimetersToFoot(millimeters).toFixed(8));
*/



// celsius to fahrenheit
/*
function celsiusFahrenheit(celsius){
    let fahrenheit=(celsius*9/5) +32;

    return fahrenheit;
}

let celsius=Number(prompt("Enter A Celsius To convert Fahrenheit"));

console.log(celsiusFahrenheit(celsius));

*/

//fahrenheit to celsius


function celsiusFahrenheit(fahrenheit){
    let celsius=(fahrenheit-32) *5/9;
    
    return celsius;
}

let fahrenheit=Number(prompt("Enter A Celsius To convert Fahrenheit"));

console.log(celsiusFahrenheit(fahrenheit).toFixed(5));

