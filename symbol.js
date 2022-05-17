let symbol1 = Symbol('id');
let symbol2 = Symbol('id');
console.log(symbol1 == symbol2, symbol1.toString(), symbol1.description);

let user = {
    name: 'meseta',
    age: 32,
    sex: 'female'
};
let id = Symbol('id');
user[id] = 'mingxin';
console.log(user[id]);

for(let key in user) {
    console.log(key)
}

let clone = Object.assign({}, user);
console.log(clone[id]);

let globalId1 = Symbol.for('id');
let globalId2 = Symbol.for('id');
console.log(globalId1 === globalId2)
console.log(Symbol.keyFor(globalId1), Symbol.keyFor(id))

