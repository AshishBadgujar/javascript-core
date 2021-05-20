console.time('your code took');
console.log("hello console");
console.log({ash:'this',marks:56});
console.table({ash:'this',marks:56});
console.warn('this is warning');
// console.clear();
console.timeEnd('your code took');
console.assert(566<189,'age>189 is not possible')
console.error('this is an error')


console.log([23,34,4,34]);

let arr=[12,23,34]
arr.push(455);
console.log(arr);

let name = "ashish"
let boolean = true
let undef = undefined
let nullvar = null

console.log("data type" +(typeof name));
console.log("data type" +(typeof boolean));
console.log("data type" +(typeof nullvar));
console.log("data type" +(typeof undef));


console.log("data type" +(typeof arr));


//creating constructor 
function generalCar(name,speed){
    this.topSpeed=speed;
    this.carName=name;
    this.run=function(){
        console.log(`${this.carName} is running`);
    }
}
car1 =new generalCar('alto',80);
car2 =new generalCar('banz',180);
car3 =new generalCar('nano',70);
