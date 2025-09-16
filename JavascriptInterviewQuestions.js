//1.) Reverse a string using methods and loops
 //Reverse a string using Methods//
function reversestring(){
     let str="Vaishnavi"
     console.log(str.split("").reverse().join(""));
}
reversestring()

//Reverse a string using loops//
let str = "Vaishnavi"
let reversed="";
for (i=str.length-1;i>=0;i--){
    reversed += str[i];
}
console.log(reversed);



