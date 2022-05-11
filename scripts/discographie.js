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
      body.classList.remove("scroll-up");
      body.classList.remove("scroll-down");
      body.classList.add("idle");
    }, 1000);
 });

 gsap.to('.spriteSheetFlo', {
    scrollTrigger: {
        trigger:'.spriteSheetFlo',
        scrub:true,
        pin:true,
        markers:false,
        start:'top 25%',
        end:'bottom 25%',
        toggleActions: 'restart complete reverse reset',
        onUpdate: (image) => {
            if(image.direction== -1) {
                body.classList.add("scroll-up");
                body.classList.remove("scroll-down");
                body.classList.remove("idle");
            }/* if(image.direction== 1){
                body.classList.remove("idle");
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            }*/else{
                body.classList.remove("idle");
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            }
        }
    },
    /*y:'-100vw',*/
});

let formParole = document.querySelector('#formParole');
const btnForm = document.querySelector('.bouton');

const textForm = document.querySelector('.form-text');
const div = document.querySelector('.paroleChansons');
const text = document.getElementById('titre');

let titreChanson = document.querySelector('.titrechanson');
let loadingText = document.querySelector('.loadingText');
let loadingIcon = document.querySelector('.loadingIcon');

formParole.addEventListener('submit', function (e) {
    e.preventDefault();

    loadingIcon.classList.remove('hidden');
    loadingText.classList.remove('hidden');
       
    if(textForm !== ''){
    fetch(`https://api.lyrics.ovh/v1/imagine-dragons/${text.value}`)
    //chansons qui fonctionne: demons, thunder, believer
        .then((data) => data.json())
        .then((parole) => {
        console.log(parole.lyrics);
        
        loadingIcon.classList.add('hidden');
        loadingText.classList.add('hidden');

        const newLineToBr = function(str) {
            return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
        }

            parole = newLineToBr(parole.lyrics);

            //Pourquoi tu as fait ça?
            //btnForm.textForm = textForm.value;

            //Changer le titre de la chanson pour la valeur contenu dans la valeur du input textForm
            titreChanson.textContent = textForm.value;

            //Enlever la classe hidden pour afficher le Titre de la chanson
            titreChanson.classList.remove('hidden');

            //Ajouter le contenu dans le div
            div.innerHTML= parole;
        })
        
        .catch(error => {

            //Cacher le titre et le spinner quand le catch attrape une erreur
            titreChanson.classList.add('hidden');
            loadingIcon.classList.add('hidden');
            loadingText.classList.add('hidden');

            div.textContent =("Désolé, les paroles n'ont pu être trouvées. En voici la raison:" + error );
        });
        
    }

});
