//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

let getSecondsToday = () => {
    let resultSeconds = new Date()
    resultSeconds.setHours(0, 0, 0, 0)

    return Math.round((new Date() - resultSeconds) / 1000);
}

console.log(getSecondsToday())

//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

let getSecondsToTomorrow = () => {
    let resultSeconds = new Date()
    resultSeconds.setHours(0, 0, 0, 0)
    resultSeconds.setDate(resultSeconds.getDate() + 1)
    return Math.round((resultSeconds - new Date()) / 1000);
}

console.log(getSecondsToTomorrow())