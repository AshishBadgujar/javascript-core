const students=[
    {name:"ashish",subject:"javascript"},
    {name:"rohan",subject:"machine learning"}
]

function enrollStudent(student,callback){           //callback
    setTimeout(function() {
        students.push(student);
        console.log("studet has been enrolled")
        callback();                                   //called here
    }, 1000);
}

function getStudent(){
    setTimeout(function() {
        let str="";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });
        document.getElementById('list').innerHTML=str;
        console.log("student have  been fetched");
        
    }, 3000);
}

let newStudent ={name:"bhargav",subject:"python"}
enrollStudent(newStudent,getStudent);
// getStudent();