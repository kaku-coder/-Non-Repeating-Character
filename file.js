// this is the qustion

// Input: "aabbcdeff";
// Output: "c";


let input = 'aabbcdeff';
let result = '';
for (let ch of input) {
  if (input.indexOf(ch) === input.lastIndexOf(ch)) {
    result = ch;
    break
  }
}
console.log(result);



// console.log(input.indexOf('a'))
// console.log(input.lastIndexOf('a'))