var stickyBtn = document.querySelector(".stick p");
var landingPage = document.querySelector(".landing-page");
var skillsPage = document.querySelector(".skills");
var projectPage = document.querySelector(".project");
var upcomingPage = document.querySelector(".upcoming-p");
var contactPage = document.querySelector(".contact");

landingPage.addEventListener("mouseenter", function() {
  stickyBtn.textContent = "welcome";
});

  skillsPage.addEventListener("mouseenter", function() {
    stickyBtn.textContent = "expertise";
  });

  projectPage.addEventListener("mouseenter", function() {
    stickyBtn.textContent = "projects";
  });

  upcomingPage.addEventListener("mouseenter", function() {
    stickyBtn.textContent = "upcoming";
  });

  contactPage.addEventListener("mouseenter", function() {
    stickyBtn.textContent = "Thankyou";
  });
//view-btn-effect------------------
var vidCon = document.querySelector(".video-c");
var viewBtn = document.querySelector(".view-btn");

vidCon.addEventListener("mouseenter", function () {
  gsap.to(viewBtn, {
    scale: 1,
    opacity: 1,
    ease: "power1.inOut",
  });
});
vidCon.addEventListener("mouseleave", function () {
  gsap.to(viewBtn, {
    scale:0,
    opacity:0,
    ease: "power1.inOut",
  });
});
vidCon.addEventListener("mousemove", function(dets) {
  gsap.to(viewBtn, {
    left:dets.x-100,
    top:dets.y-100,
  });
});
//------------------------

// img-btn----------------
var imgCon = document.querySelector(".image1");
var pCount = document.querySelector(".p-btn1");

imgCon.addEventListener("mouseenter", function () {
  gsap.to(pCount, {
    scale: 1,
    opacity: 1,
    ease: "power1.inOut",
  });
});
imgCon.addEventListener("mouseleave", function () {
  gsap.to(pCount, {
    scale:0,
    opacity:0,
    ease: "power1.inOut",
  });
});
imgCon.addEventListener("mousemove", function(dets) {
  gsap.to(pCount, {
    left:dets.x-100,
    top:dets.y-100,
  });
});

var imgCon2 = document.querySelector(".image2");
var pCount2 = document.querySelector(".p-btn2");

imgCon2.addEventListener("mouseenter", function () {
  gsap.to(pCount2, {
    scale: 2,
    opacity: 1,
    ease: "power1.inOut",
  });
});
imgCon2.addEventListener("mouseleave", function () {
  gsap.to(pCount2, {
    scale:0,
    opacity:0,
    ease: "power1.inOut",
  });
});
// imgCon2.addEventListener("mousemove", function(dets) {
//   gsap.to(pCount2, {
//     left:dets.x-100,
//     top:dets.y-100,
//   });
// });

//-------------------------------
let tl1=gsap.timeline();
tl1.from(".nav a",{
    y:"-100%",
    duration:1,
    delay:1,
    ease: "power1.inOut",
    stagger:1,
})
tl1.from(".nav .icon",{
    scale:0,
    duration:1,
    delay:1,
    ease: "power1.inOut",
});

let tl2=gsap.timeline();
tl2.from(".about h2",{
    y:"-100%",
    duration:1,
    delay:1,
    ease: "power1.inOut",
})
tl2.from(".about p",{
    y:"100%",
    duration:2,
    delay:1,
    ease: "power1.inOut",
    stagger:1,
});
gsap.to(".rt-part img",{
  opacity:1,
  duration:2,
  ease: "power1.inOut",
})


ScrollTrigger.create({
    trigger:".skills",
    start:"top top",
    end:"bottom bottom",
    pin:".s-right",
})

gsap.to(".inner-outline", {
    // backgroundColor: "#393e46",
    height:"100%",
    y:"-100%",
    delay:1,
    duration:2,
    scrollTrigger: {
      trigger: ".w-1",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    ease: "power1.inOut",
  });
  
  gsap.to(".inner-outline", {
    backgroundColor: "#83afa6",
    height:"100%",
    y:"-100%",
    delay:1,
    duration:2,
    scrollTrigger: {
      trigger: ".w-2",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    ease: "power1.inOut",
  });
  gsap.to(".inner-outline", {
    backgroundColor:"#8594e4",
    height:"100%",
    y:"-100%",
    delay:1,
    duration:2,
    scrollTrigger: {
      trigger: ".w-3",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    ease: "power1.inOut",
  });


  gsap.from(".w-1 h2",{
    x:"-30%",
    opacity:0,
    scrollTrigger:{
        trigger:".w-1",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    },
    duration:2,
  })
  gsap.from(".w-1 p",{
    x:"30%",
    opacity:0,
    scrollTrigger:{
        trigger:".w-1",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    },
    stagger:1,
    duration:2,
  })
  gsap.from(".w-2 h2",{
    x:"-30%",
    opacity:0,
    scrollTrigger:{
        trigger:".w-2",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    },
    duration:2,
  })
  gsap.from(".w-2 p",{
    x:"30%",
    opacity:0,
    scrollTrigger:{
        trigger:".w-2",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    },
    stagger:1,
    duration:2,
  })
  gsap.from(".w-3 h2",{
    x:"-30%",
    opacity:0,
    scrollTrigger:{
        trigger:".w-3",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    },
    duration:2,
  })
  gsap.from(".w-3 p",{
    x:"30%",
    opacity:0,
    scrollTrigger:{
        trigger:".w-3",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    },
    stagger:1,
    duration:2,
  });


  //project

ScrollTrigger.create({
    trigger:".project",
    start:"top top",
    end:"bottom bottom",
    pin:".p1-left",
})

//upcoming project

gsap.from(".upcoming-p p",{
  x:"100%",
  opacity:0,
  scrollTrigger:{
    trigger:".upcoming-p",
    scrub:true,
    start:"top 80%",
    end:"bottom bottom",
  },
  ease: "power1.inOut",
})
gsap.from(".upcoming-p img",{
  scale:0.5,
  opacity:0,
  scrollTrigger:{
    trigger:".upcoming-p",
    scrub:true,
    start:"top 80%",
    end:"bottom bottom",
  },
  ease: "power1.inOut",
})




