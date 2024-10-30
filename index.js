// Task 1
// Give 3 values (numbers) with 3 different prompts and show in HTML which one is nearest to 100 and which one is farthest.

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

// Task 2
// Write a JS program that returns all the words that you give in the alphabetical order.

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

// Task 3
// Write a JS function to find the first not repeated character. F/e: “aaabbcde”: “a”.

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


// Task 4
// Write a JS program to replace every character in a given string with the character following it in the alphabet. F/e: “abc”: “bcd”.
function replaceChar() {
    let char = document.getElementById("repChar").value;
    let res = '';
    for (let i = 0; i < char.length; i++){
        res += String.fromCharCode(char.charCodeAt(i) + 1);
    }
    alert(res);
}

// Task 5
// Write a JS program to find the longest and shortest string from a given array of strings.
// You have to give three prompts (write 3 words), and it has to show the longest and shortest words.

/*
let num1 = prompt("Enter the word")
let num2 = prompt("Enter the word")
let num3 = prompt("Enter the word")

let words = [num1, num2, num3];
let longestWord = words.reduce((a, b) => (a.length >= b.length ? a : b));
let shortestWord = words.reduce((a, b) => (a.length <= b.length ? a : b));

alert(`Longest word: ${longestWord} \nShortest word: ${shortestWord}`);
*/


// Task 6
// Highlight all the words over 7 characters long with a blue background and less than 3 characters with a bold style.

const task6Text = document.querySelector("#task6");
task6Text.innerHTML = task6Text.innerHTML.split(" ").map((word) => {
    if (word.length > 7){
        return `<span style="background-color: lightblue;">${word}</span>`;
    }
    else if (word.length < 3){
        return `<span style="font-weight: bold;">${word}</span>`;
    }
    else{
        return word;
    }
}).join(" ");


// Task 7
//  Replace all question marks (?) with (*) asterisk and exclamation marks (!) with at sign (@) inside your HTML paragraph.

let task7Text = document.querySelector("#task7");
task7Text.innerHTML = task7Text.innerHTML.replace("?" , "*");
task7Text.innerHTML = task7Text.innerHTML.replace("!" , "@");


//Task 8
// Split each sentence on to a separate line in the paragraph text. 
// A sentence can be assumed to be a string of text ending with these marks period (. , ? , !)

let task8Text = document.querySelector("#task8");
task8Text.innerHTML = task8Text.innerHTML.replace(/([.?!])/g, "$1<br>");


// Task 9. 
// Count the number of words in the paragraph and show the result with an alert message. 
// You can assume that all words are separated by one singular whitespace.

const task9Text = document.querySelector("#task9");
const counter = task9Text.innerHTML.split(' ').length;
alert(`Number of words: ${counter}`)


// Task 10.
// Highlight all words in a paragraph you give (Lorem) starting with a letter “a” into italics and ending with “y” into an underlined word.

const task10Text = document.querySelector("#task10");
task10Text.innerHTML = task10Text.innerHTML.split(" ").map((word) => {
    if (word[0] === "a"){
        return `<i>${word}</i>`;
    }
    else if (word[word.length - 1] === "y"){
        return `<u>${word}</u>`;
    }
    else{
        return word;
    }
}).join(" ");



// PART 3
// Task 11. Calculate the volume of a sphere. The formula is V = 4/3 π r³. 
function task11(){
    let r = parseFloat(document.getElementById("task11").value);
    let volume = 4/3 * Math.PI * Math.pow(r, 3);
    document.getElementById("res11").textContent = `${volume}`;
}

// Task 12. Calculate the volume of a cylinder. The formula is V = π r^2 h.
function task12(){
    let r = parseFloat(document.getElementById("task12rad").value);
    let h = parseFloat(document.getElementById("task12hei").value);
    let volume = Math.PI * Math.pow(r, 2) * h;
    document.getElementById("res12").textContent = `${volume}`;
}

// Task 13. Calculate the volume of a cone. The formula is V=1/3hπr².
function task13() {
    let r = parseFloat(document.getElementById("task13rad").value);
    let h = parseFloat(document.getElementById("task13hei").value);
    let volume = 1/3 * h * Math.PI * Math.pow(r, 2);
    document.getElementById("res13").textContent = `${volume}`;
}

// Task 14. Calculate the volume of a prism. The formula is V=B*h. B = ab.
function task14() {
    let a = parseFloat(document.getElementById("task14a").value);
    let b = parseFloat(document.getElementById("task14b").value);
    let h = parseFloat(document.getElementById("task14h").value);
    let B = a * b;
    let volume = B * h;
    document.getElementById("res14").textContent = `${volume}`;
}

// Task 15. Calculate the area of a triangle. The formula is S = ½ * b*h.
function task15() {
    let b = parseFloat(document.getElementById("task15base").value);
    let h = parseFloat(document.getElementById("task15height").value);
    let area = 1/2 * b * h;
    document.getElementById("res15").textContent = `${area}`;
}