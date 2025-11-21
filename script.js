const sliderItems = document.querySelectorAll('.slider-items')

let sliderActive = 1;

if (sliderItems) {
    sliderItems.forEach((slider, index) => {
        if (index === 0) {
             slider.setAttribute("data-show", "show");
        } else {
            slider.setAttribute("data-show", "hidden");
        }
    })

    setInterval(() => {
        sliderItems.forEach((slider, index) => {
            if(sliderActive ===index) {
                 slider.setAttribute("data-show", "show");
            } else {
                slider.setAttribute("data-show", "hidden");
            }
        });

        if(sliderActive === sliderItems.length - 1 ) {
            sliderActive = 0;
        } else {
            sliderActive++;
        }

    }, 5000)
}

// INI SLIDE HAMBURGER MENU //

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


