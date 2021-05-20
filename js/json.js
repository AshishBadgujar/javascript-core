let obj = {
    name: "ashish1",
    std: "4",
    medium: "eng",
    school: "jnv",
    total: "5000",
    payed: []
}

let doc = []

obj.payed.push({
    date: "2-12-2020",
    amount: "300"
})

doc.push(obj)

console.log("initial", doc)
let str = JSON.stringify(doc)
console.log("stringify", str)
localStorage.setItem("students", str)
// let json = JSON.parse(str)
// console.log("json", json)
let getItemsFromLocalStorage = localStorage.getItem("students")
getItemsFromLocalStorage = JSON.parse(getItemsFromLocalStorage)
console.log("getItemsFromLocalStorage", getItemsFromLocalStorage)
