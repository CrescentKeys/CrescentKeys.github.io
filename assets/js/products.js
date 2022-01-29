/* === MENU SHOW Y HIDDEN === */
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

// SHOW

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

// HIDDEN

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})

/* === MOUSEMOVE HOME IMG === */
document.addEventListener('mousemove', move)

function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}



/* === GSAP ANIMATION === */

//NAV
gsap.from('.nav__logo .nav__toggle', {opacity: 0, durtion: 1, delay: 2, y:10})
gsap.from('.nav__item', {opacity: 0, durtion: 1, delay: 2.1, y:30, stagger: 0.2})

//HOME
gsap.from('.home__title', {opacity: 0, durtion: 1, delay: 1.8, y:30})

// WRAPPER
gsap.from('.wrapper', {opacity: 0, durtion: 1, delay: 2.1, y:30})
