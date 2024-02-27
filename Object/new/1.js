//Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи  и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator() {
    this.read = function (a, b) {
        this.a = a
        this.b = b
    }
    this.sum = function (){
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
}