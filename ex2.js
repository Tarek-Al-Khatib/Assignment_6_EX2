var input = prompt("Enter the number of rows");
var rows = parseInt(input);
var number = 1;
for (var i = 0; i < rows; i++) {
  var line = "";
  for (var j = 0; j <= i; j++) {
    line += number + " ";
    number += 2;
  }
  console.log(line);
  number = 1;
}
