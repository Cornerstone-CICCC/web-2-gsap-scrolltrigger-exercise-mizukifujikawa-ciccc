gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE
const timelineOne = gsap.timeline({
    scrollTrigger: {
      trigger: ".line-one",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
  });

  timelineOne
    .from(".line-one span", { y: 100, opacity: 0, duration: 1, stagger: 0.5 })
    .to(".line-one", { backgroundColor: "yellow", duration: 1 })
    .from(".sun", { x: "100vw", duration: 1 })
    .to(".sun", { x: "-100vw", duration: 2 }, "+=1")
    .to(".line-one span", { x: "100vw", duration: 2 }, "<")
    .to(".line-one", { backgroundColor: "white", duration: 2 }, "<");

  const timelineTwo = gsap.timeline({
    scrollTrigger: {
      trigger: ".line-two",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
  });

  timelineTwo
    .from(".line-two span:first-child", { x: "-130vw", duration: 1 })
    .from(".line-two span:last-child", { x: "130vw", duration: 1 }, "<")
    .from(".line-two span", { scale: 50, duration: 1 }, "<")
    .fromTo(".line-two span:first-child", { y: 0, duration: 1 }, { y: "-2rem", duration: 1 })
    .to(".line-two span:first-child", { y: 0, duration: 1 })
    .fromTo(".line-two span:last-child", { y: 0, duration: 1 }, { y: "-2rem", duration: 1 })
    .to(".line-two span:last-child", { y: 0, duration: 1 });

  const timelineThree = gsap.timeline({
    scrollTrigger: {
      trigger: ".line-three",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
  });

  timelineThree
    .from(".line-three span", { y: "100vh", duration: 1, stagger: 0.5 })
    .to(".line-three", { backgroundPositionX: "0", duration: 1 })
    .to(".line-three span", { color: "white" }, "<")
    .from(".moon", { x: "100vw" }, "-=0.6");