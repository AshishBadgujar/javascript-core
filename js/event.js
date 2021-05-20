document.getElementById('heading').addEventListener('click',function(e){
    // console.log(e);
    let variable;
    variable=e.target;
    variable=e.target.className;

    variable=Array.from(e.target.classList);
    variable=e.offsetX;
    variable=e.clientX;           // according to window
    console.log(variable);
    console.log('you have clicked on heading');
     
});

let btn=document.getElementById('btn');
btn.addEventListener('click',func);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);
btn.addEventListener('mouseenter',func4);
btn.addEventListener('mouseleave',func5);


function func(e){
    console.log('thnanks',e);
    e.preventDefault();
}
function func2(e){
    console.log('thnanks its double',e);
    e.preventDefault();
}
function func3(e){
    console.log('thnanks its mousedown',e);
    e.preventDefault();
}
function func4(e){
    console.log('mouse enter');
    e.preventDefault();
}
function func5(e){
    console.log('mouse leave');
    e.preventDefault();
}
document.querySelector('.container').addEventListener('mousemove',func6);
function func6(e){
    console.log('mouse moving');
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor =`rgb(${e.offsetX},${e.offsetY},255)`;
    e.preventDefault();
}




 