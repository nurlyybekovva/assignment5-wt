// Task 1. Nearest and farthest.

/*
let n1 = parseFloat(prompt("Enter the first number:"));
let n2 = parseFloat(prompt("Enter the second number:"));
let n3 = parseFloat(prompt("Enter the third number:"));

const nearTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;
let nearest = nearTo100(n1, nearTo100(n2, n3));

const farFrom100 = (a, b) => (100 - a) > (100 - b) ? a : b;
let farthest = farFrom100(n1, farFrom100(n2, n3));

console.log(`Nearest to 100: ${nearest}`);
console.log(`Farthest from 100: ${farthest}`);
*/

// Task 2. Alphabetical order.

/*
let input = prompt("Enter a sentence: ").trim().split(' ');
const sortStr = (str) =>
    str.split('').sort((a, b) => a > b ? 1 : -1).join('');

let str = '';
for (i = 0; i < input.length; i++){
    str += sortStr(input[i]) + " ";
}
console.log(str);
 */

// Task 3. First not repeated character.

function countChar(str, c) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === c){
            count++;
        }
    }
    return count;
}
function notRepeatedChar() {
    let char = document.getElementById("str").value;
    for (let i = 0; i < char.length; i++){
        if (countChar(char, char[i]) === 1){
            document.getElementById("res").textContent = char[i];
            break;
        }
    }
}


// Task 4. Replace every character in a given string
function replaceChar() {
    let char = document.getElementById("repChar").value;
    let res = '';
    for (let i = 0; i < char.length; i++){
        res += String.fromCharCode(char.charCodeAt(i) + 1);
    }
    alert(res);
}

// Task 5.  Find the longest and shortest string

/*
let num1 = prompt("Enter the word")
let num2 = prompt("Enter the word")
let num3 = prompt("Enter the word")

let words = [num1, num2, num3];
let longestWord = words.reduce((a, b) => (a.length >= b.length ? a : b));
let shortestWord = words.reduce((a, b) => (a.length <= b.length ? a : b));

alert(`Longest word: ${longestWord} \nShortest word: ${shortestWord}`);
*/

// Task 6.