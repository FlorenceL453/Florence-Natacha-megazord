gsap.registerPlugin(ScrollTrigger);

const sectionsArr = document.querySelectorAll('.contenuP section');
 sectionsArr.forEach(function(sectionP){
    gsap.timeline({
        duration:1,
        scrollTrigger: {
            markers: false,
            start: 'top 50%',
            end: 'bottom 75%',
            toggleActions: 'restart complete reverse reset',
            trigger: sectionP,
        },
    })
    //Animer tous les titres2
    .fromTo(sectionP.querySelector('.titreCarteMembre .title-2'), {x:'-100%', opacity:0}, {x:'0%', opacity:1, ease:'back'})
    //Animer les cartes
    .fromTo(sectionP.querySelector('.dan'), {x:'-100%', opacity:0, rotation:360}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '<')
    .fromTo(sectionP.querySelector('.wayne'), {x:'-100%', opacity:0, rotation:360}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '+=0.25')
    .fromTo(sectionP.querySelector('.daniel'), {x:'-100%', opacity:0, rotation:360}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '+=0.50')
    .fromTo(sectionP.querySelector('.ben'), {x:'-100%', opacity:0, rotation:360}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '+=0.75')
    
    //Animer le titre du carrousel
    .fromTo(sectionP.querySelector('.Carrousel .title-2'), {x:'-100%', opacity:0}, {x:'0%', opacity:1, ease:'back'}, '+=0.25')
    //Animer le carrousel
    .fromTo(sectionP.querySelector('.Carrousel .swiper'), {x:'-100%', opacity:0, rotation:360}, {x:'0%', opacity:1, rotation:0, ease:'back'}, '<')
    
    //Animer le titre de la section vidéo
    .fromTo(sectionP.querySelector('.video .title-2'), {x:'-100%', opacity:0}, {x:'0%', opacity:1, ease:'back'}, '+=0.50')
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
            if(image.direction == -1) {
                body.classList.add("scroll-up");
                body.classList.remove("scroll-down");
            } else {
                body.classList.add("scroll-down");
                body.classList.remove("scroll-up");
            }
        }
    },
    y:'445%'
});

//Variable bouton du formulaire
let formChanson = document.querySelector('#formChanson');
const btnForm = document.querySelector('.bouton');

let txtChanson = document.querySelector('.txtChanson');
let blockForm = document.querySelector('.parolesChansons');
let titreChanson = document.querySelector('.titrechanson');

let loadingText = document.querySelector('.loadingText');
let loadingIcon = document.querySelector('.loadingIcon');


//Écouter la soumission du form pour que le preventDefault fonctionne (La soumission du form (click ou enter) ne rafraîchit pas la page)
formChanson.addEventListener('submit', function (e) {
    e.preventDefault();

    //À la soumission du formulaire faire apparaître le spinner et le loading...
    loadingIcon.classList.remove('hidden');
    loadingText.classList.remove('hidden');

    //Condition qui vérifie que le champs de text n'est pas vide
    if (txtChanson !== '') {
        //Faire un fecth et concanténer nom groupe de musique / et contenu du champs de recherche
        //zero et birds fonctionnent en minuscules et en majuscules
        fetch(`https://api.lyrics.ovh/v1/imagine-dragons/${txtChanson.value}`)
        .then(data => data.json())
        .then(paroles => {
            console.log(paroles.lyrics);

            //Cacher le spinner et son text quand l'information est récupérée par le fetch et affichée sur la page
            loadingIcon.classList.add('hidden');
            loadingText.classList.add('hidden');

            //Code pour ne pas afficher les paroles sur une seule ligne
            const newLineToBr = function(str) {
                return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
            }

            //Instruction 7, passer les données du fetch dans la fonction newLineToBr
            paroles = newLineToBr(paroles.lyrics);
                
            //Changer le titre de la chanson pour la valeur contenu dans la valeur du input txtChanson
            titreChanson.textContent = txtChanson.value;

            //Enlever la classe hidden pour afficher le Titre de la chanson
            titreChanson.classList.remove('hidden');
            
            //Ajouter le contenu dans le div blockForm
            blockForm.innerHTML = paroles;
        })
        //Attraper l'erreur quand la promesse est brisée et afficher un message d'erreur
        .catch(error => {

            //Les cacher aussi quand le message d'erreur s'affiche
            titreChanson.classList.add('hidden');
            loadingIcon.classList.add('hidden');
            loadingText.classList.add('hidden');

            //Insérer le message d'erreur dans le div des paroles avec la raison de l'erreur(error)
            blockForm.textContent = ("Désolé, les paroles n'ont pas pu être trouvées. En voici la raison: " + error);
        });
    }
});