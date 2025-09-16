// for in loop methods  // used to iterate obj i.e key value pair
let obj={
    name:"Trend",
    domain:"Testing",
    Course:"Playwright"
}
for(let key in obj){
  console.log(key)
    console.log(obj[key])
    console.log(key,":",obj[key])
}
// for of loop methods
//using array////
let arr=["One","two","three","four"]
for( let dummy of arr)
    {
    console.log(dummy)
}
  ////// using string  ////
let string ="javascript"
  for(let str of string)
    {
    console.log(str)
  }
  /// for each /// it looks like arrow function  //
  //  we can pass any values it will accept format like value index and array
  let num=[1,2,"Three","four",5]
  num.forEach((value,index,array)=>
{
    console.log(value,index,array)
})
///////////////////////////////////////////////////
// Map reduce filter//
//Map//
let mrf=[1,2,3,4,6]
let add = mrf.map((val)=>val+5)
console.log(add)

//filter//
let even=mrf.filter((val)=>val%2==0)
console.log(even)

///reduce//
// acc means accumulator initially accumulator has 0 we can also define the value for accumulator
let sum=mrf.reduce((acc,val)=>acc+val,10)  
console.log(sum)



