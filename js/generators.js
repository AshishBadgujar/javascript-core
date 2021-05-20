function* numbersGen(){
    let i=0;
    while(true){
        yield i++;
    }
}
const gen = numbersGen();
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);