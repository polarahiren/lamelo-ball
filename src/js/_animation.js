
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { Draggable } from "gsap/Draggable";
  import { MotionPathPlugin } from "gsap/MotionPathPlugin";

  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

  // locomotiveScroll
  import LocomotiveScroll from 'locomotive-scroll';
  const scroll = new LocomotiveScroll();

  //full page smotth scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".bodyscroll"),
    smooth: true
  }); 
  

  
//logo animation
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

  //header dwonload button animation
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


  //hero slider title box animation
  gsap.to(".hero-title-box *", {
    scrollTrigger: {
      trigger: ".hero-title-box *",
      toggleActions: "restart none none none"
    },
    ease: "in",
    x: 0,
    opacity:1,
    delay: 2,
    duration: 1,
    stagger: 0.2,
  });

  gsap.to(".hero-usp-box", {
    scrollTrigger: {
      trigger: ".hero-usp-box",
      toggleActions: "restart none none none"
    },
    ease: "in",
    y: 0,
    opacity:1,
    delay: 2,
    duration: 1,
    stagger: 0.2,
  });