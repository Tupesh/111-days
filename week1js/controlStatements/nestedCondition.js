let a = 23;
if (a < 0) {
    if (a % 2 === 1) {
        console.log("The negative number is odd");
    }
    else {
        console.log("The negative number is even");
    }
}
else if (a > 0) {
    if (a % 2 === 1) {
        console.log("The positive number is odd");
    }
    else {
        console.log("The positive number is even");
    }
}
else{
    console.log("The number is zero");
}