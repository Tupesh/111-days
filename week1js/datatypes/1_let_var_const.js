var a = 12;
var b = 23;

sum = a + b;
console.log("The sum of ", a, "and", b, "is", sum);


if (a % 2 == 0) {
    let a = "Even";
    console.log("The value of a is", a);
}
else {
    let a = "Odd";
    console.log("The value of a is", a);
}

console.log("The value of a set by var is", a);

if (b == 23) {
    const pi = 3.14;
    console.log("The value of pi is", pi);
}
console.log("The value of pi is", pi); // Reference error

console.log("The value of app is",app0);

var app0 = "Clash of clans";

console.log("The value of app is",app1); // Reference error

let app1 = "Clash Royale";

console.log("The value of app is",app2); // Reference error

const app2 = "Clash of titans";



/* 
    ******* Key takeaways from let, var and const *******
        var is function scoped
        let and const are block scoped
        The value of const is constant

        var:- variable gets hoisted and can be used with an undefined value
        let/const:- variable gets into temporal dead zone and cannot be used before initialization
*/