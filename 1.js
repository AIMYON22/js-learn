let meseta = {
    name: 'meseta',
    sex: 'female',
    height: '175cm',
    weight: '65kg',
    age: '32'
}
let mingxin = {
    name: 'lu mingxin',
    sex: 'female',
    height: '170cm',
    weight: '52kg',
    age: '22'
}
meseta = new Proxy(meseta, {
    get(target, prop) {
        if(prop in target) {
            return target[prop];
        }
        else {
            return 'cant find this porp'
        }
    },

    set(target, prop, value) {
        target[prop] = value;
        return true;
    }
})

alert(meseta.name);
alert(meseta.haha);
meseta.name = 'aimyon'
alert(meseta.name)