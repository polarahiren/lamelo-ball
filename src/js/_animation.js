
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { Draggable } from "gsap/Draggable";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";

  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);


  gsap.to(".logo-text span", {
    scrollTrigger: {
      trigger: ".logo-text span",
      toggleActions: "restart none none none"
    },
    ease: "in",
    x: 0,
    opacity:1,
    delay: 1,
    stagger: 0.1,
  });

  gsap.to(".logo svg", {
    scrollTrigger: {
      trigger: ".logo svg",
      toggleActions: "restart none none none"
    },
    ease: "in",
    scale: 1,
    opacity:1,
    delay: 0.5
  });

  gsap.to(".download-buttons a.block", {
    scrollTrigger: {
      trigger: ".download-buttons a.block",
      toggleActions: "restart none none none"
    },
    ease: "in",
    y: 0,
    opacity:1,
    delay: 1.5,
    stagger: 0.2,
  });