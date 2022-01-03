"use sctict"

//Map
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
let loading = ymaps.ready(init);
function init(){     
    // Создание карты 
    var myMap = new ymaps.Map("map", {
        center: [59.924974, 30.334484],
        zoom: 17,
        controls: [] //Удаление всех вспомогательных элементов
    });
    myMap.behaviors.disable('scrollZoom'); //Отключение зума колесиком мышки
    // Добавление полоски Zoom
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
    //Добавление собственной марки на карту
    var myPlacemark = new ymaps.Placemark([59.924904, 30.335784] , {},
        {   
            iconLayout: 'default#image',
            iconImageHref: 'https://raw.githubusercontent.com/Orynik/cmyk-landing/master/src/assets/map_tag.svg',
            iconImageSize: [367, 190],
            iconImageOffset: [-190, -185] });     
    myMap.geoObjects.add(myPlacemark);
}