//var numbers = [1,2,3,4,5,6,7,8,9,10];
var numbers = [];
for (var i = 0; i < 10; i++){
  numbers.push(i + 1);
}
//console.log(numbers);
var filtered = numbers.filter(function (number) {
  return number % 2 ===0;
})
console.log(filtered);

