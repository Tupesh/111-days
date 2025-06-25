let a=1, b=9;
 if (a % 2 == 0 && b % 2 == 0){
    console.log("Both numbers are even");
 }
else if (a % 2 == 0 || b % 2 == 0){
    console.log("One of the numbers is even");
 }
else if (a % 2 != 0 && b % 2 != 0){
    console.log("Both numbers are odd");
 }

 /* In the above context, && and || works as 'and' and 'or' operators as in C languagem */ 

let c = "" || "String"; // returns first truthy value which is string here
let d = '' && 0 && "other string"; // returns first falsy hy 
let e = "0" && "other string"; // returns last truthy value when are are truthy 
console.log(c);
console.log(d);
console.log(e);

