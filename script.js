/*
ASSIGNMENT 1:
Using iteration, write a function fibs
which takes a number and returns an array
containing that many numbers from the fibonacci 
sequence. Using an example input of 8, this function 
should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/
function fibs(n) {
  const array = [0, 1];

  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}
console.log(fibs(8));

//Now write another function fibsRec which solves the same problem recursively.
function fibsRec(n) {
  if (n === 2) return [0, 1];
  else {
    let s = fibsRec(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}
console.log(fibsRec(8));

//ASSIGNMENT 2:
//Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));

  function merge(l, r) {
    let result = [];
    let lIndex = 0;
    let rIndex = 0;

    while (lIndex < l.length && rIndex < r.length) {
      if (l[lIndex] < r[rIndex]) {
        result.push(l[lIndex]);
        lIndex++;
      } else {
        result.push(r[rIndex]);
        rIndex++;
      }
    }
    return result.concat(l.slice(lIndex), r.slice(rIndex));
  }
}

const unsortedArray = [8, 4, 6, 2, 1, 9, 5, 7, 3];
const sortedArray = mergeSort(unsortedArray);

console.log(sortedArray);
