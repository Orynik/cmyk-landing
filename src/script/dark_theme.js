"use strict"

let darkItemSwitcher = document.getElementById('theme-swicher')

let isSwitchOn = false;

darkItemSwitcher.addEventListener('click',(event) => {
  if(isSwitchOn){
    event.target.src = 'src/assets/sun.svg'
    document.documentElement.style.setProperty('--dark-theme','#252525')
    document.documentElement.style.setProperty('--dark-theme__text','#fff')
  }else{
    event.target.src = 'src/assets/moon.svg'
    document.documentElement.style.setProperty('--dark-theme','#fff')
    document.documentElement.style.setProperty('--dark-theme__text','#252525')
  }
  
  isSwitchOn = !isSwitchOn;
})