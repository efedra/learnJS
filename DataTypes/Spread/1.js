//У нас есть объект salaries с зарплатами:
//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let topSalary = function (obj) {
    let max = -Infinity;
    let nameSalary = "";
    for (let [name, salary] of Object.entries(obj)) {
        if(max < salary){
            max = salary
            nameSalary= name
        }
    }
    return nameSalary
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries))