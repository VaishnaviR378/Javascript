class info{
    name="shalini"
    age=22
    native="Tirupur"
    details(){
        console.log("My name is "+ this.name+ ",My age is "+ this.age+ ",My native is"+ this.native)
    }
}
let print = new info // object creation
print.details()
/////////////////////////////////////////////////////////////////////////
class flower{
    constructor(name,color,fragrance,season){
        this.name=name
        this.color=color
        this.fragrance=fragrance
        this.season=season
    }
    fdetails(){
        console.log("My name is "+this.name+", my color is "+this.color)
        console.log(`my fragrance is ${this.fragrance} and my season is${this.season}`)
    }
}
let rose = new flower("rose","pink","Mild","All season")
rose.fdetails()
let jasmine=new flower("Jasmine","white","Heavy","Summer")
jasmine.fdetails()
