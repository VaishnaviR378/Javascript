//call back//
function orderfood(dummy){
    setTimeout(() => {
        console.log("I am going to order food");
        dummy()
    }, 5000);
}

function eatfood(){
    setTimeout(() => {
        console.log("order delivered, going to eat food")
    }, 2000);
}
orderfood(eatfood)
/////////// call back hell////////////  when more than two functions we can use call back hell
function brush(a){
    setTimeout(() => {
       console.log("Time Taken for brush 2500") 
       a()
    }, 25000);
}

    function bath(b){
        setTimeout(() => {
            console.log("time taken for bath is 3500")
            b()
        }, 3500);
    }

    function ready(c){
        setTimeout(() => {
           console.log("Time taken for ready is 1500") 
           c()
        }, 1500);

    }

    function eat(d){
        setTimeout(() => {
            console.log("Time taken for ezt is 5000")
            d()
        }, 5000);
    }
    
    function relax(){
        setTimeout(() => {
            console.log("time taken for relax is 500")
        }, 500);
    }
    brush(()=>{
        bath(()=>{
            ready(()=>{
                eat(relax)
            })
        })
    })