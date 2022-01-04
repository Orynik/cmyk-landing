"use strict"

let submitButton = document.getElementById('submitForm')
let modalForm = document.getElementById('successSendedForm')
let modalFormClose = document.getElementById('modalClose')

//event передается по умолчанию в события
//кнопка оптравки заявки команды
submitButton.addEventListener('submit', () => {
    event.preventDefault()

    modalForm.style.opacity = '1'
    modalForm.classList.add('show')
})

function submittingForm(){
    event.preventDefault()

    modalForm.style.opacity = '1'
    modalForm.classList.add('show')
}

//Кнопка закрытия
modalFormClose.addEventListener('click', () => {
    modalForm.style.opacity = '0'
    //Отложенная очистка класса и удаление "весящего" свойства
    setTimeout(() => {
        modalForm.classList.remove('show')
        modalForm.style.removeProperty('opacity')
    }, 300)
})


