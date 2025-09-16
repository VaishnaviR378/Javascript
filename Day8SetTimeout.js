function dummy()
{
 setTimeout(() => {
    console.log("hello world")
}, 2000);
}
dummy()
////////////////////////////////////////////////////////////////////////////////
function brush(){
    setTimeout(() => {
       console.log("Time Taken for brush 2500") 
    }, 25000);
}

    function bath(){
        setTimeout(() => {
            console.log("time taken for bath is 3500")
        }, 3500);
    }

    function ready(){
        setTimeout(() => {
           console.log("Time taken for ready is 1500") 
        }, 1500);
    }

    function eat(){
        setTimeout(() => {
            console.log("Time taken for ezt is 5000")
        }, 5000);
    }
    
    function relax(){
        setTimeout(() => {
            console.log("time taken for relax is 500")
        }, 500);
    }

brush()
ready()
eat()
relax()