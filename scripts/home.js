gsap.registerPlugin(ScrollTrigger);

const sectionsArr = document.querySelectorAll('.contenuP section');
 sectionsArr.forEach(function(sectionP){
    gsap.timeline({
        duration:2,
        scrollTrigger: {
            markers: true,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'restart complete reverse reset',
            trigger: sectionP,
        },
    })
    //Animer tous les titres2
    .fromTo('.title-2', {x:'100%', opacity:0, scale:2, rotation:180, skew:360}, 
        {x:'0%', opacity:1, scale:1, rotation:0, ease:'back', skew:0})
 });
