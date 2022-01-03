"use strict"

const dateEnd = new Date('12-30-2022')
const timer = document.getElementById('timer')

//TODO: Добавить проверку на день/дни
//TODO: Добавить проверку на двузначные, однозначные часы/минуты/секунды
let counting = () => {
    //Вычисление даты
    let timeDiff = Math.abs(dateEnd.getTime() - new Date().getTime())
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    let newDate = new Date(timeDiff)

    //Отрисовка
    timer.innerText = `${diffDays} день ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
}

//Вызов
setInterval(counting,1000)

