

//local storage

localStorage.setItem('Name','ashish');
localStorage.setItem('Name2','bhargav');
let  impArray = ['bhindi','palak','potato','tomato'];
localStorage.setItem('strsubzi',impArray);    //by string
localStorage.setItem('Sabzi',JSON.stringify(impArray));


let name=localStorage.getItem('Name')
console.log(name);

// let str=localStorage.getItem('subzi');  
// console.log(str)       //string
let Array = JSON.parse(localStorage.getItem('Sabzi'));
console.log(Array);



//session storage

sessionStorage.setItem('sname','ashish');
sessionStorage.setItem('sname2','bhargav');
let sarray=['bhindi','palak','potato','tomato']
// sessionStorage.setItem('subzi',sarray);    //by string
sessionStorage.setItem('subzi',JSON.stringify(sarray));


let sname=sessionStorage.getItem('sname')
console.log(sname);

// let sstr=sessionStorage.getItem('subzi');  
// console.log(sstr)       //string
let array=JSON.parse(sessionStorage.getItem('subzi'));
console.log(array);



