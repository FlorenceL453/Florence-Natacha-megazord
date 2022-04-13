gsap.registerPlugin(ScrollTrigger);

const sectionArr = document.querySelectorAll('section');
sectionArr.forEach(function(section){
    gsap.timeline({
        duration:2,
        scrollTrigger: {
             markers:false,
            start: 'top 100%',
            end:'bottom 100%',
            toggleActions: 'restart complete reverse reset',
            trigger: section,
    },
})
.fromTo('.title-2',{opacity:0, scale:0.5,},{opacity:1, scale:1,})
.fromTo('.title-1 ',{rotation:0},{rotation:360})
.fromTo(' section img',{rotation:0},{rotation:360,})
.fromTo('p.txt.text-header',{rotation:0},{rotation:360})
.fromTo('.vidYoutube .title-2',{opacity:0, scale:0.5,},{opacity:1, scale:1,})
.fromTo('.divIframe',{rotation:0},{rotation:360})
});

const body = document.querySelector('body');
let isScrolling;

window.addEventListener('scroll', function() {
    window.clearTimeout(isScrolling);
    body.classList.add("is-scrolling");
    
    isScrolling = setTimeout(function() {
      body.classList.remove("is-scrolling");
      body.classList.add("idle");
    }, 1000);
 });

 gsap.from('.spriteSheetFlo', {
    scrollTrigger: {
        trigger:'.spriteSheetFlo',
        scrub:true,
        toggleActions: 'restart complete reverse reset',
        onUpdate: (image) => {
            if(image.direction== -1) {
                body.classList.add("scroll-up");
                body.classList.remove("scroll-down");
                body.classList.remove("idle");
            } if(image.direction== 1){
                body.classList.remove("idle");
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            }else{
                body.classList.remove("idle");
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            }
        }
    },
    y:'-100vw',
});