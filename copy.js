let arr1 = [1, 2, 3, {name: 'meseta'}];
let arr2 = [...arr1];

arr1[3].name = 'mingxin'
arr1.push(4);
console.log(arr1, arr2)