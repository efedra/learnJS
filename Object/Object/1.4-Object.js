//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

//пишу разные объявления функции для закреления!
let multiplyNumeric = function (obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2
        }
    }
}

let user = {age: 1, name: "Ivan", parents: 9}
multiplyNumeric(user)
console.log(user)