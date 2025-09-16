function roomclean(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let room=true;
            if(room){
                resolve("room is cleaned")
            }
            else{
                reject("room is not cleaned")
            }
        }, 4000);
    })
}

function vesselwash()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           let wash=true;
        if(wash){
            resolve("vessels are washed")
        }
        else{
            reject("vessels are not washed")
        } 
        }, 2000);
        

    })
}
function cooking(){
    return new Promise((resolve,reject)=>{
setTimeout(() => {
    let cook=false;
    if(cook){
        resolve("cooking is done")
    }
    else{
        reject("No cooking")
    }
}, 5000);
    })
}
roomclean().then((el)=>{
    console.log(el);
    return vesselwash()
}).then((el2)=>{
    console.log(el2);
    return cooking()
}).then((el3)=>{
    console.log("All works are done")
}).catch((err)=>{
    console.log("Error :" , err)
})