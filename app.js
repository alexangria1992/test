//Challenge 1

function repeat(a, n, r) {
  return !n ? r : repeat(a, --n, (r || []).concat(a));
}
console.log(repeat([1, 2, 3], 3));

//Challenge 2

var remove = "limesharp developer test".replace(/^./, (str) =>
  str.charAt(0).toUpperCase()
);

var arr1 = remove.split("");

var reg = /[aeiou]/gi;

var arr2 = remove.match(reg);

var reformat = [];

for (var i = 0; i < arr1.length; i++) {
  if (arr2.indexOf(arr1[i]) === -1) {
    reformat.push(arr1[i]);
  }
}

console.log(reformat.join(""));

//Challenge 3

for (var i = 0; i <= 10; i++) {
  var addValue = 0;
  if (i % 2 == 0) {
    var next_binary_number = "";
    for (var j = 1; j <= 10; j++) {
      next_binary_number += "" + addValue;
      if (addValue == 0) {
        addValue = 1;
      } else {
        addValue = 0;
      }
    }
    console.log(next_binary_number);
  } else {
    addValue = 1;
    var next_binary_number = "";
    for (var j = 1; j <= 10; j++) {
      next_binary_number += "" + addValue;
      if (addValue == 0) {
        addValue = 1;
      } else {
        addValue = 0;
      }
    }
    console.log(next_binary_number);
  }
}
