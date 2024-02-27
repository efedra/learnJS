//Создайте функцию-конструктор Accumulator(startingValue).
//
// Объект, который она создаёт, должен уметь следующее:
//
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue){
    this.value = startingValue
    this.read= function (a){
        this.value +=a
    }
}

let acc = new Accumulator(0)
acc.read(12)
acc.read(2)
console.log(acc.value)