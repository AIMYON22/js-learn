new Promise(function(resolve, reject) {
    setTimeout(resolve(2), 1000)
}).then(function(result) {
    console.log(result);
    return Math.pow(result, 2)
}).then(function(result) {
    console.log(result);
    return Math.pow(result, 2)
}).then(function(result) {
    console.log(result);
    return Math.pow(result, 2)
})
