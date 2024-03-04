
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

// console.log(countVowels('My name is Alexander')) //7

// Second task

let arr1 = [1, 2, 3, 4]
function moveOverEnd(arr1) {
  
  let b = arr1.shift()
  arr1.push(b)

  return arr1
}
console.log(moveOverEnd(arr1))

let arr2 = [1, 2, 3, 4]
function moveOverStart(arr2) {

  let b = arr2.pop()
  arr2.unshift(b)

  return arr2

}
console.log(moveOverStart(arr2))

// не могу понять как сделать одну функцию, но с вторым параметром, чтоб он переключал ..
// moveOver([1,2,3,4], 'end') // [2,3,4,1]
// moveOver([1,2,3,4], 'start') // [4,1,2,3]