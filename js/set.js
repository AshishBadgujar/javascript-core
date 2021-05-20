const mySet = new Set();  // no repetation 
console.log("my  set ",mySet);    
//adding the values in set
mySet.add('this')
mySet.add('that')
mySet.add('ashihs')
mySet.add('badguajr')
mySet.add(345)
mySet.add(true)
console.log("my  set ",mySet);
console.log(mySet.size);
console.log(mySet.has('that'));  //true
mySet.delete('that')
console.log(mySet.has('that'));  //false
console.log(Array.from(mySet))

for (let item of mySet){
    console.log(item)
}