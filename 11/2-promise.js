let num = 2;
let song = new Promise(function(resolve, reject) {
    let value = Math.pow(num, 3);
    if(num == 2) {
        resolve(value);
    }
    else {
        reject(new Error('num != 2'))
    }
})
song
.finally(() => alert('promise ready'))
.then(
    alert
    // result => console.log(result),
    // error => console.log(error)
)


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
delay(3000).then(() => alert('alert after 3s'))