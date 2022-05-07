// Array的原型上暴露了3个用于检索数组内容的方法
let a = ['a', 'b', 'c', 'd'];

let aKeys = Array.from(a.keys())
let aValues = Array.from(a.values());
let aEntries = Array.from(a.entries())

console.log(aKeys, aValues, aEntries)