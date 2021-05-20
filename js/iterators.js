function fruitIterators(values){
    let nextIndex=0;
    return{
        next:function(){
            if(nextIndex < values.lenght){
                return{
                    value: values[nextIndex++],
                    done:false
                }
            }
            else{
                     return{
                        done:true
                    }
            }
        }
    }
}

const myarray=["bhindi","bunana","apple","pinapple","orange"];
const fruits = fruitIterators(myarray);
console.log("my array ",myarray);
console.log(fruits.next().value);