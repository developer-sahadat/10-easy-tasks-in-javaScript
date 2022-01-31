
let gradNumber=Number(prompt("Enter Your Subject Number"));


switch(true){
    case (gradNumber>=101 || gradNumber<=0):
        console.log("Not valid Code");
        break;
    case (gradNumber<=100 && gradNumber>=80):
    console.log("A+");
    break;
    case (gradNumber<=79 && gradNumber>=70):
    console.log("A");
    break;
    case (gradNumber<=69 && gradNumber>=60):
    console.log("A-");
    break;
    case (gradNumber<=59 && gradNumber>=50):
    console.log("B");
    break;
    case (gradNumber<=49 && gradNumber>=40):
    console.log("C");
    break;
    case (gradNumber<=39 && gradNumber>=33):
    console.log("D");
    break;
    default:
        console.log("F");
}