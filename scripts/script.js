const rocket = document.querySelector('.rocket-container-for-vw')
const cow = document.querySelector('.cow')
const smoke = document.querySelector('.smoke')
const sun = document.querySelector('.sun')
const rings = document.querySelector('.rings')
const saturn = document.querySelector('.saturn')
const alien = document.querySelector('.alien')
const earth = document.querySelector('.earth')
const pluto = document.querySelector('.pluto')

pluto.addEventListener('click', plutoClick)
saturn.addEventListener('click', turn)
saturn.addEventListener('animationend', turn)
sun.addEventListener('click', sunMission)
cow.addEventListener('click', liftOn)
rocket.addEventListener('click', liftOff)
alien.addEventListener('click', alienClick)
earth.addEventListener('click', earthSun)

function plutoClick(){
  pluto.classList.add('pluto-click')
}
function earthSun(){
  earth.classList.add('earth-click')
}
function turn(){
    rings.classList.toggle('ring-animation')
}
function liftOff(){
    rocket.classList.add('rocket-animation')
    smoke.classList.add('smoke-visible')

}
function liftOn(){
    rocket.classList.remove('rocket-animation')
    smoke.classList.remove('smoke-visible')
  
}

function sunMission(){
    rocket.classList.add('rocket-sun')
}

function alienClick(){
  alien.classList.add('alien-click')
}

// https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
// scroll animatie
window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );