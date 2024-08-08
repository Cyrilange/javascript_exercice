function arrsum(arr1, arr2) {
  let result = [];
  let i = 0;
  while (i < arr1.length && i < arr2.length) {
    result.push(arr1[i] + arr2[i]);
    i++;
  }
  return result;
}

console.log("Call a function that add the numbers in array 1 and 2");
console.log(arrsum([6, 5, 8], [3, 7, 9]));
