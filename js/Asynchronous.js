console.log("this is Asynchronous ")

setTimeout(() => {
    for (let i = 0; i < 450; i++) {
        console.log("this is index"+i)      
    }
}, 100);
console.log("work in progress")