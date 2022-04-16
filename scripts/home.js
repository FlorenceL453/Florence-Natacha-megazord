gsap.registerPlugin(ScrollTrigger);

const sectionsArr = document.querySelectorAll('.contenuP section');
 sectionsArr.forEach(function(sectionP){
    gsap.timeline({
        duration:1,
        scrollTrigger: {
            markers: false,
            start: 'top 75%',
            end: '50% 75%',
            toggleActions: 'restart complete reverse reset',
            trigger: sectionP,
        },
    })
    //Animer tous les titres2
    .fromTo(sectionP.querySelector('.titreCarteMembre .title-2'), {x:'-100%', opacity:0, rotation:180}, {x:'0%', opacity:1, rotation:0, ease:'back'})
    //Animer les cartes
    .fromTo(sectionP.querySelectorAll('.carteMembre'), {x:'-100%', opacity:0, rotation:360}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '<')
    
    //Animer le titre du carrousel
    .fromTo(sectionP.querySelector('.Carrousel .title-2'), {x:'-100%', opacity:0, rotation:180}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '+=0.25')
    //Animer le carrousel
    .fromTo(sectionP.querySelector('.Carrousel .swiper'), {x:'-100%', opacity:0, rotation:360}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '<')
    
    //Animer le titre de la section vidéo
    .fromTo(sectionP.querySelector('.video .title-2'), {x:'-100%', opacity:0, rotation:180}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '+=0.50')
    //Animer la vidéo
    .fromTo(sectionP.querySelector('.video .divIframe'), {x:'-100%', opacity:0, rotation:360}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '<')
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
gsap.to('.anim3D', {
    scrollTrigger: {
        trigger:'.anim3D',
        scrub:true,
        pin:true,
        markers:false,
        start:'top 50%',
        end:'bottom 50%',
        toggleActions: 'restart complete reverse reset',
        onUpdate: (image) => {
            if(image.direction== -1) {
                body.classList.add("scroll-up");
                body.classList.remove("scroll-down");
            } else {
                body.classList.add("scroll-down");
                body.classList.remove("scroll-up");
            }
        }
    },
    //y:'0vw', L'animation fonctionne, mais en inverse, le scroll-up quand je défile vers le bas et le scroll-down quand je défile vers le haut.
    //y:'100%',
});
