// Input array
let arr = [2, 5, 6, 3, 8, 9];

// Using map to transform elements
let newArr = arr.map(function (val, index) {
  return { key: index, value: val * val };
});

// Display output
console.log(newArr);
