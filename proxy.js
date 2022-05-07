// let numbers = [1, 2, 4];
// numbers = new Proxy(numbers, {
//     get(target, prop) {
//         if (prop in target) {
//             return target[prop];
//         }
//         else {
//             return 0
//         }
//     },

//     set(target, prop, value) {
//         if (typeof value == 'number') {
//             target[prop] = value;
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// })

// alert(numbers[1]);
// alert(numbers[4]);

// numbers.push(11);
// numbers.push(12);
// numbers.push('test')

// alert(numbers[4]);

let meseta = {
    name: 'meseta',
    age: 32,
    sex: 'female',
    _password: '***'
}

user = new Proxy(meseta, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
})

for (let key in user) {
    console.log(user[key])
}