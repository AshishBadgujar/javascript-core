let divElem=document.createElement('div');
let val= localStorage.getItem('text');
let text;
if(val==null){
let text=document.createTextNode('this is my element click to edit');
divElem.appendChild(text);
}
else{
text=document.createTextNode(val);
divElem.appendChild(text);
}
divElem.setAttribute('id','elem');
// divElem.setAttribute('class','elem');
let container=document.querySelector('.container');
let first=document.querySelector('.first');

container.insertBefore(divElem,first);
// console.log(container);
// console.log(first);
// console.log(divElem)

document.getElementById('elem').addEventListener('click',function(){
    // let html=elem
    let notextarea =document.getElementsByClassName('textarea').length;
    if(notextarea==0){ 
        let html=elem.innerHTML;
        divElem.innerHTML=`<textarea class="textarea" rows=1>${html}</textarea>`;
    }
    let textarea=document.querySelector('.textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML=textarea.value;
        localStorage.setItem('text',textarea.value)
    });

});
