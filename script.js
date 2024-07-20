function cusroreffect(){
    var page1content = document.querySelector(".header-content");
    var cur = document.querySelector(".cursor");
    
    page1content.addEventListener("mousemove", function(dets) {
        gsap.to(cur, {
            x: dets.clientX,
            y: dets.clientY,
            duration: 0.2, 
            ease: "power2.out"
        });
    });
    
    page1content.addEventListener("mouseenter", function() {
        gsap.to(cur, {
            scale: 1,
            opacity: 1,
            duration: 0.2
        });
    });
    
    page1content.addEventListener("mouseleave", function() {
        gsap.to(cur, {
            scale: 0,
            opacity: 0,
            duration: 0.2
        });
    });
}

cusroreffect();

gsap.utils.toArray(".page2-head p").forEach((p, i) => {
    gsap.from(p, {
        y: 120, 
        duration: 1,
        opacity:0,
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            start: "top 70%", 
            end: "top 40%",  
            scrub: 2,
            delay: i * 0.2
        }
    });
});


gsap.from(".page2-bottom p", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    opacity:0,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 80%", 
        end: "top 20%",   
        scrub: 2
    }
});
gsap.utils.toArray(".page4-head p").forEach((p, i) => {
    gsap.from(p, {
        y: 120, 
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".page4", 
            scroller: "body",
            start: "top 70%",
            end: "top 40%", 
            scrub: 2
        },
        delay: i * 0.2 
    });
});
gsap.from(".page4-bottom p", {
    y: 120, 
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".page4", 
        scroller: "body",
        start: "top 80%",
        end: "top 20%",   
        scrub: 2
    }
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true, // Optional: to loop the slides
    autoplay: {
      delay: 5000, // Optional: 5 seconds delay between slides
    },
    breakpoints: {
      // When window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // When window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });