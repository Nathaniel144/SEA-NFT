//Get elements from the DOM
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

//toggle ope/close menu
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');

    let tl = gsap.timeline({});
     gsap.from('.m-l', {
       x: -50,
       opacity: 0,
       duration: 1,
       ease: Power3.easeOut,
       stagger: 0.6,
     });
})

// gsap animation

