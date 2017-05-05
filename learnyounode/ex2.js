function grabArgs(list){
  nlist = []
  for (var i = 2; i < list.length; i ++){
    nlist.push(+list[i]);
  }
  return nlist;
}
var args = grabArgs(process.argv);
function sum (nums) {
  var acc = 0;
  for (var i = 0; i < nums.length; i++){
    acc += nums[i];
  }
  return acc;
}
console.log(sum(args));
