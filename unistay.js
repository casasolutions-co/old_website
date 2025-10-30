// Smooth Scroll + Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 🔹 Fade in each section smoothly
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
    });
  });

  // 🔹 Parallax effect for hero background
  gsap.to(".hero", {
    backgroundPositionY: "40%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});

