gsap.registerPlugin(ScrollTrigger);

const sectionArr = document.querySelectorAll('section');
sectionArr.forEach(function(section){
    gsap.timeline({
        duration:2,
        scrollTrigger: {
             markers:true,
            start: 'top 100%',
            end:'bottom 100%',
            toggleActions: 'restart complete reverse reset',
            trigger: section,
    },
})
.fromTo('.title-2',{opacity:0, scale:0.5,},{opacity:1, scale:1,})
.fromTo(' section img',{x:'-300%'},{x:'0%'})
.fromTo('.title-1 ',{opacity:0, scale:0.5,},{opacity:1, scale:1,})
.fromTo(' section img',{x:'-300%'},{x:'0%'})
});