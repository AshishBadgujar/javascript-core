console.log("this is ES6 tutorial class inheriatance")
class employee{
    constructor(name,exp,div){
        this.name=name;
        this.exp=exp;
        this.div=div;
    }
    slogan(){
        return `i am ${this.name}and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.exp;
    }
    static add(a,b){
        return a+b;
    }
}

let ashish=new employee("ashish",45,"division")
console.log(ashish.joiningYear());
console.log(employee.add(34,5));


class programmer extends employee{                //class inherited 
    constructor(name,exp,div,language){
        super(name,exp,div)
        this.language=language;
    }
    favLanguage(){
        if(this.language=='python'){
            return 'python';  
        }
        else{
            return 'java script';
        }
    }

    static multiply(a,b){
            return a*b;
        }
}

let bhargav= new programmer("vishu",1,"chrome","python")
console.log(bhargav);
console.log(bhargav.favLanguage());