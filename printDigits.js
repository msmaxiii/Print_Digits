// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

// For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

const printDigits =(num) =>{
    while(num) {
        let digitToPrint = num % 10
        console.log(digitToPrint)
        num = (num - digitToPrint)/10
    }
}
    
console.log(printDigits(1));
console.log(printDigits(3140));
console.log(printDigits(12));
console.log(printDigits(1007));


// const printStrDigits = num =>{
    // num.toString().split('').reverse().forEach(char =>{console.log(char)});
// }