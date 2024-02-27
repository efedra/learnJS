//Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let aclean = function (arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr))