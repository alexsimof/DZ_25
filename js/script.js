
// first task

function countVowels(str) {
  let count = 0;
  let arr = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (arr.includes(char)) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels('My name is Alexander')) //7

// Second task

