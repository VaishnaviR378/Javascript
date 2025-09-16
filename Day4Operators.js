//Operators//
//Arithmetic Operator//
function arithmetic(){
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);   //division
console.log(a%b);  //Modules to find reminder.
console.log(a**b);
a++ //post incement
console.log(a)
--b //pre decerement
console.log(b)
}
arithmetic()

function assigment(){
let a=15;
let b=10;
a+=b
console.log(a) // a=(a+b)  (15+10)=25  a=25
a-=b
console.log(a) // a=(a-b) already a holds value 25 now 25 - 10 is 15 so a=15
}
assigment()

function equality(){
let a=10;
let b=11;
let c="11";
console.log(a==b);
console.log(b==c);
console.log(a===b);
console.log(b===c);
}
equality()

function comparison(){
    let a=10;
    let b=17;
    let c="10";
    console.log(a<b);
    console.log(a>b);
    console.log(a>=c);
    console.log(a<=b);
    console.log(a!=b);
    console.log(a!=c);
    console.log(a!==b);

}
comparison()