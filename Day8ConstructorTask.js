class students{
    constructor (name,section,marks)
    {
        this.name=name
        this.section=section
        this.marks=marks
    }
    calculate(){
        let percentage = (this.marks/500)*100;
        console.log(`Name: ${this.name}`);
        console.log(`Section: ${this.section}`);
        console.log(`Marks: ${percentage}`);
        console.log("-----------------")
    }
}
let student1=new students("Priya","B",300);
let student2=new students("Aishwarya","A",420);
let student3=new students("Anu","C",445);
let student4=new students("Prakash","D",430);
let student5=new students("Hari","E",440);
 student1.calculate()
 student2.calculate()
 student3.calculate()
 student4.calculate()
 student5.calculate()
