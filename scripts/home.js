gsap.registerPlugin(ScrollTrigger);

const sectionsArr = document.querySelectorAll('.contenuP section');
 sectionsArr.forEach(function(sectionP){
    gsap.timeline({
        duration:2,
        scrollTrigger: {
            markers: false,
            start: 'top 50%',
            end: 'bottom 75%',
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
      body.classList.add("idle");
    }, 1000);
 });

 //Animer la barrelatérale et ajouter et supprimer les classes scroll-up et down selon la direction du scroll.
gsap.to('.anim3D', {
    scrollTrigger: {
        trigger:'.anim3D',
        scrub:4,
        //pin:true,
        markers:false,
        start:'top 0%',
        end:'bottom 100%',
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
    y:'445%',
});

//Variable bouton du formulaire
const btnForm = document.querySelector('.bouton');
let txtChanson = document.querySelector('.txtChanson');
let blockForm = document.querySelector('.parolesChansons');
let titreChanson = document.querySelector('.titrechanson');
let placeholder = document.querySelector('.txtChanson placeholder')
//console.log(placeholder);

//Écouter le click du bouton du form
btnForm.addEventListener('click', function (e) {
    e.preventDefault();

    //Condition qui vérifie que le champs de text n'est pas vide
    if (txtChanson !== '') {
        //Faire un fecth et concanténer nom groupe de musique / et contenu du champs de recherche
        fetch("https://api.lyrics.ovh/v1/imagine-dragons/zero")
        .then((data) => data.json())
        .then((paroles) => {
            console.log(paroles.lyrics);

            //Code pour ne pas afficher les paroles sur une seule ligne
            const newLineToBr = function(str) {
                return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
            }

            //Instruction 7, passer les données du fetch dans la fonction newLineToBr
            paroles = newLineToBr(paroles.lyrics);

            //Ajauter le contenu dans le div blockForm
            blockForm.innerHTML = paroles;
        })
    } else {
        console.log('error: invalid input');
    }
});