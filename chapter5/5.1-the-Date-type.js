//Date.parse, Date.UTC
let time1 = new Date('5/23/2019')
let time2 = new Date(2019, 4, 23)
console.log(time1, time2)

//测量代码执行时间
function countPlus(num) {
    for(let i =0; i <= num; i++) {
        console.log(1)
    }
}
let start = Date.now();
countPlus(100);
let stop = Date.now();
let result = stop - start;
console.log(result)

//继承的方法
let time3 = new Date();
console.log(time3.toLocaleString(), time3.toString(), time3.valueOf())

//日期格式化方法
console.log(time3.toDateString(), 
time3.toTimeString(), 
time3.toLocaleDateString(),
 time3.toLocaleTimeString(),
  time3.toUTCString())
