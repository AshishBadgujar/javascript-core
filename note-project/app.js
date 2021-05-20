// if user adds a note 
shownote();
let addbtn = document.querySelector('.addbtn');
addbtn.addEventListener('click', function (e) {
    let addtext = document.getElementById('area');
    let addtitle = document.getElementById('title');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myObj={
        title:addtitle.value,
        text:addtext.value
    }
    notesobj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addtext.value = "";
    addtitle.value = "";
    
    shownote();
});

// function to show notes
function shownote() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html +=
            `<div class="notecard">
                <h3>${element.title}</h3>
                <p>${element.text}</p>
                <button class="delete" id="${index}" onclick="deleteNote(this.id)">Delete</button>
            </div>`
    });
    let noteselm=document.getElementById('notes');
    if(notesobj.length != 0){
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML=`nothing show`
    }
}

// delete note
function deleteNote(index) {
    
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    shownote();
}

//search
let search=document.getElementById('searchText');
search.addEventListener('input',function(){
    let inputVal=search.value.toLowerCase();

    let noteCards=document.getElementsByClassName('notecard');
    
    Array.from(noteCards).forEach(function(element){
        let cardText=element.getElementsByTagName('p')[0].innerText;
    
        if(cardText.includes(inputVal)){
            element.style.display="block"
        
        }
        else{
            element.style.display="none"
            
        }
    })
});