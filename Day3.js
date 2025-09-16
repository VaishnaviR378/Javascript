///Non-Primitive Datatypes///
//array//
let arr=["js",12]
console.log(arr,typeof(arr))
//object//  //key -value pair//
let obj={
    name:"vaishnavi",
    age:26
}
console.log(obj,typeof(obj))

//function//
function dummy()
{
    console.log("hello world")
}
dummy()
console.log(typeof(dummy))
///function declaration by passing paramaeter//
function greet(name){
    console.log("hello",name)
}
greet("vaishnvai")
greet("priya")
//function expression//
let info = function(name,age,native)
{
    console.log("My name is "+name+" My age is "+age+" My Native is "+native)
}
info("abi",25,"coimbatore")
info("vaish",27,"chennai")
////arrow function//
let movie=(ticket,snacks,parking)=>
{
    console.log(ticket+snacks+parking)
}
movie(200,200,200)