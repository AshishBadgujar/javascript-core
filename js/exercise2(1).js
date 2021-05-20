let heading=document.getElementById('heading');
let val =localStorage.getItem('text');
let text;
if(val ==null){
    text=document.createTextNode(heading.innerHTML);
    heading.appendChild(text);
}
else{
    text=document.createTextNode(val);
    heading.appendChild(text);
    console.log(val)
    console.log(text)
}
heading.addEventListener('click',function(){
    let notextarea=document.getElementById('textarea');
    if(notextarea == null){
        let html=heading.innerHTML;
        heading.innerHTML=`<textarea name="text" id="textarea" cols="60" rows="3">${html}</textarea>`
    }
    let textarea=document.getElementById('textarea');
        textarea.addEventListener('blur',function(){
        heading.innerHTML=textarea.value;
       
        localStorage.setItem('text',textarea.value);

    });
});




// here i cant change heading dirrectly because it is created with html file