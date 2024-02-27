// /Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

let randomInteger = (min,max)=>{
    return Math.trunc(min + Math.random() * (max-min + 1))
}

console.log(randomInteger(2,9))