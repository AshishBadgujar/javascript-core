class library{
    constructor(user,bookName){
        this.user=user;
        this.bookName=bookName;

    }
    getBookList(){
        return this.bookName

    }
    issueBook(book,user){
        this.user=user;
        this.bookName.push(book);
    }
    returnBook(bookName){
        let index=this.bookName.indexOf(bookName);
        this.bookName.splice(index,1);
    }
}

let ashish=new library("ashish",['investonomy','3idiot','psycology','physics']);
console.log(ashish)

console.log(ashish.getBookList());

ashish.issueBook("ashish",'maths');
console.log(ashish.getBookList());

ashish.returnBook('3idiot');
console.log(ashish.getBookList());



