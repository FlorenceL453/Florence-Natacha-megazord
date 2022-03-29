gsap.registerPlugin(ScrollTrigger);

const animSection = gsap.to('section', {
    scrollTrigger: 'section',
    markers:true,
    start: 'bottom bottom',
    end:'top top',
});