gsap.registerPlugin(ScrollTrigger);

// Check screen size and create animation
if (window.innerWidth < 1488) {
  ScrollTrigger.create({
    animation: gsap.from(".logo", {
      y: "50vh",
      scale: window.innerWidth/250,
      yPercent: -50,
    }),
    scrub: 1,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end: "top center",
  });
} else {
  ScrollTrigger.create({
    animation: gsap.from(".logo", {
      y: "50vh",
      scale: 6,
      yPercent: -50,
    }),
    scrub: 1,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end: "top center",
  });
}

// gsap.to(".animate1", {
//      scale: 1.2, 
//      scrollTrigger: {
//        trigger: ".animate1", 
//        start: "30% 60%",
//        end: "top 10%",  
//        scrub: true, 
//        markers: false 
//      }
//    });

document.querySelector('.aboutme').addEventListener('click', function(event) {
     event.preventDefault(); // Prevent the default jump
     const target = document.querySelector('#aboutme');
     const offset = 100; // Offset in pixels
     const scrollY = window.pageYOffset || document.documentElement.scrollTop;
     const targetPosition = target.getBoundingClientRect().top + scrollY;
   
     window.scrollTo({
       top: targetPosition - offset,
       behavior: 'smooth'
     });
   });

   document.querySelector('.cando').addEventListener('click', function(event) {
     event.preventDefault(); // Prevent the default jump
     const target = document.querySelector('#cando');
     const offset = 100; // Offset in pixels
     const scrollY = window.pageYOffset || document.documentElement.scrollTop;
     const targetPosition = target.getBoundingClientRect().top + scrollY;
   
     window.scrollTo({
       top: targetPosition - offset,
       behavior: 'smooth'
     });
   });

   document.querySelector('.havedone').addEventListener('click', function(event) {
     event.preventDefault(); // Prevent the default jump
     const target = document.querySelector('#havedone');
     const offset = 100; // Offset in pixels
     const scrollY = window.pageYOffset || document.documentElement.scrollTop;
     const targetPosition = target.getBoundingClientRect().top + scrollY;
   
     window.scrollTo({
       top: targetPosition - offset,
       behavior: 'smooth'
     });
   });
   
   

