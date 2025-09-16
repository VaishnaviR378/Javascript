// else if//
let age=15
if(age>0 && age <=2){
    console.log("Infant")
}
else if(age >2 && age <18)
{
    console.log("Children")
}

else if(age >=18 && age <=60)
{
    console.log("Adult")

}
else if(age >60 && age<=120)
{
    console.log("old age")
}
else
{
    console.log("check the age")
}
///// switch statement ///
let day ="Wednesday"
switch(day){
    case "monday": console.log("this is monday")
    break;
    case "Tuesday": console.log("This is Tuesday")
    break;
    case "Wednesday":console.log("Yes, Today!!")
    break;
    default: console.log("Check the day")
}
