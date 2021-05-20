function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            const error=true;
            if(!error){
              console.log("there is not error");
              resolve();
            }
            else{
                console.log("their is error");
                reject("sorry not fulfilled")
            }             
        }, 1000);
    })
}
func1().then(function(){
    console.log("thanks for resolving ")
}).catch(function(error){
    console.log("veery bad" + error)
})







function prom(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
        const error=true;
            if(!error){
                conasole.log("hellow bro i am well resolved")
                resolve();
            }
            else{
                console.log("sorry bro i am not resolved")
                reject("something went wrong check you connection");
            }
        },3000);
    })
}
prom().then(function(){
    console.log("hoshhhhhhh")
}).catch(function(error){
    console.log("error is there"+error)
})