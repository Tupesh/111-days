let divisor = 0, dividen = 32;
try {
    if (divisor === 0 ){
        throw new Error("Cannot diviide by zero")
    }
    let quotient = dividen/divisor;
    console.log("The quotient while dividing",dividen,"by",divisor,"is",quotient);
} catch (err) {
    console.log(err.message);
} finally {
    console.log("finally...... will always runnnnnnnn")
}