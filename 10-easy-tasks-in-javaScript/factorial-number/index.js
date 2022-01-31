// first way

/*
let num=1;
for(let i=1; i<=5; i++){

    num=num*i;
    console.log(num);
}

*/

//second way

/*
function factorialNumber(number){
    let facetorialCheck=1;
    for(let i=1; i<=number; i++){
        facetorialCheck=facetorialCheck*i;
    }

    console.log(facetorialCheck);
}

let number=50;

factorialNumber(number)

*/

//third way

// function factorialNumberCheck(){
//     let number=1;
//     for(let x=1; x<10; x++){
//         number=number*x;
//     }

//     return number;
// }

// console.log(factorialNumberCheck());

//four way

function factorialNumber4(num){
    let number=1;
    let x=num;
    while(x>=1){
        // console.log(x);
        number=number*x;
        x--;
    }
    return number
}

console.log(factorialNumber4(10)
);
