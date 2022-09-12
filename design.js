//

class student{

    static count=0;  //static variable to call

    

   constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){

       

       return(student.count++);     //this is how u access static variable

   }

   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${age} is not eligible`);

       }

   }







   

}

const pichi=new student('Riya',18,1234,34);

const priya=new student('Hiya',15,2345,35);

const maya=new student('Diya',16,4567,60);

const Sita=new student('Siya',17,7891,70);

const Arun=new student('Rooh',19,3456,80);

console.log(student.countStudent());

pichi.eligible();

priya.eligible();

maya.eligible();

Sita.eligible();

Arun.eligible();


//placement fat arrow using
 class student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return(minmarks) =>{

            console.log('inside egligible for current company',this)
            if(this.marks>minmarks && this.age>minPlacementAge){
                console.log(this.name+"is ready for placement")
            }else{
                console.log(this.name+"is not  ready for placement")

            }

        }
    }
 }

 const arun=new student('Arun',23,75);
 arun.setPlacementAge(18)(40);
