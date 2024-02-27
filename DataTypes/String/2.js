//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

let checkSpam = function (str) {
    str = str.toUpperCase()
    return str.includes('VIAGRA') || str.includes('XXX')
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))