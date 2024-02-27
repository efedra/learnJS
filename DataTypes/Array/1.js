//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

let camelize = (str) => {
    return str.split('-').map((el, index) => {
        if (!index) {
            return el.toLowerCase()
        } else {
            return el[0].toUpperCase() + el.slice(1)

        }
    }).join('')
}

console.log(camelize('background-color'))

module.exports = camelize;