console.log('this is regular expression tutorial')
let reg = /ashish/;
reg = /ashish/g;         //g means global
// reg = /ashish/i;         //i case insensitive
console.log(reg);
console.log(reg.source);

//function to match expression
let s = "this is ashish only ashish"
let result = reg.exec(s);
// result=reg.exec(s);
// console.log(result);
// result=reg.exec(s);
// console.log(result);
if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}

//true or false
let result2 = reg.test(s);
console.log(result2);

//arrray of result
let result3 = s.match(reg);     //invert 
console.log(result3);

//return index of match
let result4 = s.search(reg);     //invert 
console.log(result4);

//returns new string with all replacement
let result5 = s.replace(reg, 'bhargav');     //invert 
console.log(result5);




//METACHARACTERS symbols
reg = /^ashi/;      //expression is strarting with
reg = /sh$/;       //exoression ends with
reg = /a.hish/;       //matches any one character btwn them
reg = /a*sh/;       //matches any 0 or more character btwn them
reg = /ax?shi?/;       //afer character means that character is optional
reg = /a\*sh/;       //actual * in expression


//character sets
reg = /a[a-z]hish/;     //can be any character betwn a-z
reg = /a[^aty]hish/;     //cannot be be any character from a,t,y
reg = /a[a-zA-Z]his[hyt0-9]/;     //can be any character betwn a-z or A-Z

// Quantifiers
reg = /as{2}hish/;     //s can occur exactly 2 times
reg = /as{0,2}hish/;     //s can occur exactly 2 times

//Groupings 
reg = /(as){2}hish/;     //(as) can occur exactly 2 times

//character classes
reg = /\wsh/;             //word character _ or aphabate or numbers
reg = /\w+sh/;            //word characters _ or aphabates or numbers
reg = /\dsh/;             // \d means digit 
reg = /\d+sh/;            // \d means digits 
reg = /\Dsh/;             // \D means non-digit 
reg = /\D+sh/;            // \D means non-digits 
reg = /\sis/;            // \s means whitespace character 
reg = /\s+is/;            // \s means whitespace characters 
reg = /\Sis/;            // \S means  non-whitespace character 
reg = /\S+is/;            // \S means non-whitespace characters 
reg = /ashish\b/;            // \b word boundry

//Assertions
reg = /h(?=y)/;            // y is after h
reg = /h(?!y)/;            // y is not after h


