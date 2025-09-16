// for loop//
for(let i=0;i<=10;i++){
    console.log(i)
}
let x=0
for(let i=0;i<=10;i++)
{
    x=x+i
    //console.log(x) // It will iterate total value and print each output
}
console.log(x) // it will itretare total value and print final value

// for loop in array//
let arr =["One","Two","Three","Four","Five"]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
let str=""
for(let i=0;i<arr.length;i++){
    str=str+ " | " +arr[i]
    console.log(str)
}
console.log(str)

// while loop//
let a=0;
while(a<=10){
    a++
    console.log(a)  // if we give without a++ it wil run infinity.
}
// do while//
let d=0;
do{
    console.log(d);
    d++
}
while(d>=10)