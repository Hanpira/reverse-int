module.exports = function reverse (n) {
    let result = 0;
    let num = Math.abs(n);
    for (let i = 0; num > 0 ; num = Math.floor(num / 10), i++) {
        let digit = num % 10;
        result = result*Math.floor(10,i)+digit;
    }
    return result;
}
