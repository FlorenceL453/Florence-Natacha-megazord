gsap.registerPlugin(ScrollTrigger);

const sectionsArr = document.querySelectorAll('.contenuP section');
 sectionsArr.forEach(function(sectionP){
    gsap.timeline({
        duration:2,
        scrollTrigger: {
            markers: false,
            start: 'top 50%',
            end: 'center 75%',
            toggleActions: 'restart complete reverse reset',
            trigger: sectionP,
        },
    })
    //Animer tous les titres2
    .fromTo('.SectionMembre .title-2', {x:'100%', opacity:0, scale:2, rotation:180, skew:360}, {x:'0%', opacity:1, scale:1, rotation:0, ease:'back', skew:0})
    //Animer les cartes
    .fromTo('.carteMembre', {opacity:0, scale:2, rotation:360, skew:180}, {opacity:1, scale:1, rotation:0, skew:0, ease:'back'}, '<')
    //Animer le titre du carrousel
    .fromTo('.Carrousel .title-2', {x:'100%', opacity:0, scale:2, rotation:180, skew:360}, {x:'0%', opacity:1, scale:1, rotation:0, ease:'back', skew:0}, '+=0.25')
    //Animer le carrousel
    .fromTo('.Carrousel', {opacity:0, scale:2, rotation:360, skew:180}, {opacity:1, scale:1, rotation:0, skew:0, ease:'back'}, '<')
    //Animer le titre de la section vidéo
    .fromTo('.video .title-2', {x:'100%', opacity:0, scale:2, rotation:180, skew:360}, {x:'0%', opacity:1, scale:1, rotation:0, ease:'back', skew:0}, '+=0.50')
    //Animer la vidéo
    .fromTo('.video', {opacity:0, scale:2, rotation:360, skew:180}, {opacity:1, scale:1, rotation:0, skew:0, ease:'back'}, '<')
 });
