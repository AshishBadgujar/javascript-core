async function ashish(){
    console.log("we enterd in ashish");
    const response = await fetch('https://api.github.com/users');
    console.log("before response")
    const users = await response.json();
    console.log("users resolved")
    return users
}

console.log("before calling ashish")
let a = ashish();
console.log("after calling ashish")
console.log(a);
a.then(data => console.log(data))
console.log("last line of this file")