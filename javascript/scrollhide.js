// $(document).ready(() => {
//     $(function() {
//         $('#demo02').scrolling({ offsetTop: -200 }); 
        
//         $('#demo02').on('scrollin', function(event, $all_elements) {
//         $('#demo02').animate({opacity: 1}, 600);
//         console.log('Currently Viewing');
//         });

//         $('#demo02').on('scrollout', function(event, $all_elements) {
//         $('#demo02').animate({opacity: 0}, 200);
//         console.log('outside of View');
//         });
//     });
// });


const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});