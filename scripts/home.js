gsap.registerPlugin(ScrollTrigger);

const sectionsArr = document.querySelectorAll('.contenuP section');
 sectionsArr.forEach(function(sectionP){
    gsap.timeline({
        duration:2,
        scrollTrigger: {
            markers: false,
            start: 'top 75%',
            end: 'bottom 15%',
            toggleActions: 'restart complete reverse reset',
            trigger: sectionP,
        },
    })
    //Animer tous les titres2
    .fromTo(sectionP.querySelector('.titreCarteMembre .title-2'), {x:'100%', opacity:0, rotation:180}, {x:'0%', opacity:1, rotation:0, ease:'back'})
    //Animer les cartes
    .fromTo(sectionP.querySelectorAll('.carteMembre'), {opacity:0, rotation:360}, {opacity:1, rotation:0, ease:'back'}, '<')
    
    //Animer le titre du carrousel
    .fromTo(sectionP.querySelector('.Carrousel .title-2'), {x:'100%', opacity:0, rotation:180}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '+=0.25')
    //Animer le carrousel
    .fromTo(sectionP.querySelector('.Carrousel .swiper'), {opacity:0, rotation:360}, {opacity:1, rotation:0, ease:'back'}, '<')
    
    //Animer le titre de la section vidéo
    .fromTo(sectionP.querySelector('.video .title-2'), {x:'100%', opacity:0, rotation:180}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '+=0.50')
    //Animer la vidéo
    .fromTo(sectionP.querySelector('.video .divIframe'), {opacity:0, rotation:360}, {opacity:1, rotation:0, ease:'back'}, '<')
 });

 const body = document.querySelector('body');
 let isScrolling;

 //Écouter le scroll de la page
 window.addEventListener('scroll', function() {
    window.clearTimeout(isScrolling);
    body.classList.add("is-scrolling");
    
    isScrolling = setTimeout(function() {
      body.classList.remove("is-scrolling");
    }, 1000);
 });

 //Animer la barrelatérale et ajouter et supprimer les classes scroll-up et down selon la direction du scroll.
gsap.to('.barreLateral', {
    scrollTrigger: {
        trigger:'.barreLateral',
        scrub:true,
        y:'100%',
        onUpdate: (image) => {
            if(image.direction== -1) {
                body.classList.add("scroll-up");
                body.classList.remove("scroll-down");
            } else {
                body.classList.add("scroll-down");
                body.classList.remove("scroll-up");
            }
        }
    }
})
