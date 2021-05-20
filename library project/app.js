class Book{
    constructor(name,author,type){
        this.name=name;
        this.author=author;
        this.type=type
    }
}
class display{
    add(book){
        let tableBody=document.getElementById('tableBody');
        let uiString =`<tr>
        <td class="element">${book.name}</td>
        <td class="element">${book.author}</td>
        <td class="element">${book.type}</td>    
                     </tr>`
        tableBody.innerHTML=uiString;
        tableBody.innerHTML.append(uiString);  
    }
    clear(){
        let libraryform= document.getElementsByTagName('input');
        libraryform.clear();
        console.log("block is clear")
    }
   
}

let addbtn=document.getElementById('addBook');
addbtn.addEventListener('click',submit);
function submit(){
    console.log('submitted')
    let name=document.getElementById('title').value;
    let author=document.getElementById('author').value;

    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');
    let type;
    if(fiction.checked){
        //type=document.getElementById('fiction').value;
        type="fiction";
    }
    else if(programming.checked){
        //type=document.getElementById('programming').value;
        type="computer programming";   
    }
    else if(cooking.checked){
       // type=document.getElementById('cooking').value; 
        type="cooking"
    }

    let obj=new Book(name,author,type);
    let book =new display();

    book.add(obj);
    book.clear();
    console.log(obj);
}