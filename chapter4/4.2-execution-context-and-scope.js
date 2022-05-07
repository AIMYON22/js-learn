//作用域增强,
function buildUrl1() {
    let qs = '-------'
    with(location) {
        var result = href + qs;
    }
    return result
}
function buildUrl2() {
    let qs = '-------'
    with(location) {
        let result = href + qs;
    }
    return result
}
let result1 = buildUrl1();
console.log(result1)
let result2 = buildUrl2();
console.log(result2)