/*
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
const arrayRec = [0, 1];
function fibsRec(n) {
  if (n === 2) return [0, 1];
  else {
    let s = fibsRec(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}
console.log(fibsRec(8));
