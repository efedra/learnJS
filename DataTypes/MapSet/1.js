//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

let unique = (arr)=>{
    return new Set(arr)
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))