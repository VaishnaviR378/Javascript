///Task 1
function Area(length,width){
    return length*width; // Arithmetic operation 

}
let area = Area(50,2); // declaration of values
console.log("Area :" , area);

///task 2 // Using arrow Function

let Result=(Tamil,English,science,Maths,social)=>
    {
    console.log("Percentage :",((Tamil+English+science+Maths+social)/500)*100 + "%");
    }
Result(90,90,90,90,90)