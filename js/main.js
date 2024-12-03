const navbar = document.querySelector("#navbar");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  navbar.classList.add("active");
});

close.addEventListener("click", function () {
  navbar.classList.remove("active");
});


// website animation
gsap.from(".home-text", {
  duration: 1,
  y: 200,
  opacity: 0
})

gsap.from(".contact-us", {
  opacity: 0,
  y: 300,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-us",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none none",
  },
})

gsap.from(".boxes", {
  opacity: 0,
  y: 300,
  duration: 1,
  scrollTrigger: {
    trigger: ".boxes",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none none",
  },
})