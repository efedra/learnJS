//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
"use strict"
let isEmpty = (obj) => {
    for(let key in obj){
        return false
    }
    return true
}

console.log(isEmpty({}))
console.log(isEmpty({ name: "Irina", age: 24}))