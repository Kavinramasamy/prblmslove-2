// Explain the Fibonacci series and write a function to generate
//  the first n numbers in the Fibonacci sequence.

let n = 20;
let prev = 0;
let current = 1;

for (let i = 2; i < n; i++) {
    let next = prev + current;
    prev = current;
    current = next;
}
console.log(current);