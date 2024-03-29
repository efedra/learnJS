//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».


let getWeekDay = (date) => {
    switch (date.getDay()) {
        case 0: {
            return "ВС"
        }
        case 1:
            return "ПН"
        case 2:
            return "ВТ"
        case 3:
            return "СР"
        case 4:
            return "ЧТ"
        case 5:
            return "ПТ"
        case 6:
            return "СБ"
        default: {
            return "Не удалось получить день недели"
        }
    }
}


let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getWeekDay(date));        // нужно вывести "ВТ"