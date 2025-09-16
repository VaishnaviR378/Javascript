//TASK 1// Take any 6 names into array filter those name using filter methos to print length > 3
//  and change those name into upper case using map()
let abc=["Anusha","Sri","Jk","Priya","Nivedha","Ajay"];
let Filtername = abc.filter(abc=>abc.length>3);
let Mapname = abc.map(abc=>abc.toUpperCase());
console.log(Filtername);
console.log(Mapname);
//Task 2// //for of, for in , for each//
const cart=[
    {item:"Book",price:120,quantity:2},
    {item:"Pen",price:10,quantity:5},
    {item:"Bag",price:500,quantity:1}
];
// for of//
 for(let dummy of cart)
    {
    let totalcost=dummy.price*dummy.quantity;
    console.log("Totalcost : " + totalcost)
    }
//for in//
let firstitem=cart[0];
for ( let details in firstitem)
{  
  
    console.log(details,":",firstitem[details] )
}
// for each//
cart.forEach(list=>{
   console.log(list.item.toUpperCase())
});





