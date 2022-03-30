gsap.registerPlugin(ScrollTrigger);

const sectionArr = document.querySelectorAll('section');
sectionArr.forEach(function(section){
    gsap.timeline({
        duration:2,
        scrollTrigger: {
             markers:true,
            start: 'bottom bottom',
            end:'top top',
    },
})
})