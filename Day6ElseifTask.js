//To create a function and pass the parameter for name age tamil english maths science social 
// find the total and percentage of marks
function Student(Name,Age,Tamil,English,Maths,science,social){
   
let TotalMark=(Tamil+English+Maths+science+social)
let Percentage=(TotalMark/500)*100
console.log("Name : " + Name)
console.log("Age : " + Age)
console.log("TotalMarks : " + TotalMark)
console.log("Percentage : " + Percentage + "%")
if(Percentage>=91 && Percentage<=100)
    {
    console.log("Excellent");

}
else if(Percentage>=71 && Percentage <=90)
    {
    console.log("Very good");
}
else if(Percentage>=51 && Percentage<=70)
    {
    console.log("good");
}
else if(Percentage>=35 && Percentage<=50)
    {
console.log("average");
}
else if(Percentage<=34)
{
    console.log("Fail");
}
else
    {
    console.log("Invalid");
}
}
Student("Vaishnavi",25,80,80,80,90,90)

//Switch Statement//
//Calculator Operator//
let a= 13;
let b= 12;
let operation="+"
switch (operation){
    case "+": 
    console.log("Addition:" + (a+b));
    break;
    case "-":
        console.log("Subtraction:" + (a-b));
        break;
        case "*":
            console.log("Multiplication:" + (a*b));
            break;
            case "%" :
                console.log("Division: " + (a/b));
                break;
                case "/":
                    console.log("Modules: " + (a%b));
                    break;
                    default:console.log("Recheck the Value");

        }

