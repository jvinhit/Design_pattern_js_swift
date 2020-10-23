/**
 * solution(1000); // should return 'M'
 * 
 * 
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
 */

function units(value, index) {}
function solution(number) {
    const romanMapping = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 10000,
    };
    let ints = [];
    while (number) {
        ints.push(number % 10);
        number = Math.floor(number / 10);
    }
    for (let i = 0; i < ints.length; i++) {}
    console.log(ints);
    console.log(number);
}

solution(123);
