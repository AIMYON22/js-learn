//原始值不能有属性，但不会报错
let num1 = 1;
num1.name = 'meseta';
console.log(num1.name);

// 原始类型的初始化可以只使用原始字面量形式。如果使用的是new关键字，则JavaScript会创建一个Object类型的实例，但其行为类似原始值
let str1 = 'meseta';
let str2 = new String('mingxin');

str1.name = 'meseta';
str2.name = 'mingxin';

console.log(str1.name, str2.name)
console.log(typeof str1, typeof str2)

//引用类型的复制
let user1 = {
    name: 'meseta',
    age: 32,
    sex: 'female'
}
let user2 = user1;
user2.name = 'mingxin';
console.log(user1.name);

//所有函数的参数都是按值传递(在按引用传递参数时，值在内存中的位置会被保存在一个局部变量)
function numPlus(count) {
    count++;
    return count;
}
let count = 10;
let result = numPlus(count);
console.log(count, result)

function setName1(obj) {
    obj.name = 'meseta';
}
function setName2(obj) {
    obj.name = 'mingxin';
    obj = new Object();
    obj.name = 'sakurakosan'
}
let person = new Object();
setName1(person)
console.log(person);
setName2(person)
console.log(person)

