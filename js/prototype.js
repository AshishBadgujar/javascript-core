console.log("this is prototype inheriance tutorial");

const proto={                                //object
    slogan:function(){
        return 'this company is the best';
    },  //coma
    changeName:function(newName){
        this.name=newName;
    }
}


//creats ashish object
let ashish = Object.create(proto);
ashish.name="ashish";
ashish.role='programmer';
//ashish.changeName('bhargav');
console.log(ashish);


// this also creat object
const ashish1 = Object.create(proto,{
    name:{value:"ashish", writable:true},        //  we will not use this 
    role:{value:"programmer"}
});
ashish.changeName("bhargav");






//employee constructor
function employee(name,salary,exp){
    this.name=name;
    this.salary=salary;
    this.exp=exp;
}

//slogan
employee.prototype.slogan=function(){
    return `this is the best company ${this.name}`;
}

//creates an object from constructor
let ashishObj= new employee("ashish",23124,6);
console.log(ashishObj.slogan());
console.log(ashishObj);

//programmer 
function programmer(name,salary,exp,language){
    employee.call(this,name,salary,exp);               //employee inherited
    this.language=language;
}

//inherit the prototype
programmer.prototype=Object.create(employee.prototype);

//manually set the constructor
programmer.prototype.constructor=programmer;

let rohan =new programmer("rohan",34000,2,"c#");
console.log(rohan);