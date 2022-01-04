"use strict"

let darkItemSwitcher1 = document.getElementById('theme-swicher-1')
let darkItemSwitcher2 = document.getElementById('theme-swicher-2')

let isSwitchOn = false;

darkItemSwitcher1.addEventListener('click',switchTheme)

darkItemSwitcher2.addEventListener('click',switchTheme)

function switchTheme(event){
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
}
