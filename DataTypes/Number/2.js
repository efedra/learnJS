//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

let random = function (min,max){
    return min + Math.random() * (max - min);
}

console.log(random(1,5))