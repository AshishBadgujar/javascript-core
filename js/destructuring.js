let a,b;
[a,b]=[34,56]
console.log(a,b);

[a,b,c,...d]=[1,2,3,4,5,6,7,8,9];
console.log(a)
console.log(b)
console.log(c)
console.log(d)

const fruits = ['apple','bananas','mango','orange'];
[a,b,c]=fruits;
console.log(a,b,c);

const laptop = {
    model:'asus',
    ram:8,
    rom:512,
    price:48000,
    start:function(){console.log("started")}
}
const {model,ram,rom,price,start}=laptop;
console.log(model,ram,rom,price,start);
start();