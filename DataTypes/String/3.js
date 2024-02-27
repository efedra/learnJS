//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

let truncate = (str, maxlength) => {
    return str.length > maxlength ? str.slice(0, maxlength) + "..." : str
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))