const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggles the menu out upon burger click
    burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //animations for each link
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''; // if (when you click) the link has done it's animation, it resets to blank.
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.5}s`; //if (on click) the links haven't done their animation, js will load the fade in animation.
        }
    });

    //burger to cross animation
    burger.classList.toggle('cross');

    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.toggle('nav-active');


            navLinks.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = ''; // if (when you click) the link has done it's animation, it resets to blank.
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.5}s`; //if (on click) the links haven't done their animation, js will load the fade in animation.
                }
            });

            burger.classList.toggle('cross');
        })
    })
    
}

// const navClose = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');

//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             nav.classList.toggle('nav-active');


//             navLinks.forEach((link, index) => {
//                 if(link.style.animation) {
//                     link.style.animation = ''; // if (when you click) the link has done it's animation, it resets to blank.
//                 } else {
//                     link.style.animation = `navLinkFade 0.1s ease forwards ${index / 5 + 0.5}s`; //if (on click) the links haven't done their animation, js will load the fade in animation.
//                 }
//             });

//             burger.classList.toggle('cross');
//         })
//     })
// }

// navClose();

navSlide();
