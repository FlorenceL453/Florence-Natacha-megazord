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

const btnForm = document.querySelector('.btn');
const textForm = document.querySelector('.form-text');
const div = document.querySelector('.paroleChansons');
const text = document.getElementById('titre').innerHTML;



    btnForm.addEventListener('click',function(e){;
        e.preventDefault();
    if(textForm !== 0){
        fetch("https://api.lyrics.ovh/v1/ImagineDragons/+'text'")
        .then((data)=> data.json())
        .then((data)=>{
        console.log(lyrics);
        div.insertAdjacentHTML('afterend','<p>data</p>');
        const newLineToBr = function(str) {
            return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
        }
        })
        .catch((error => div.insertAdjacentHTML('afterend',"<p> Désolé, les paroles n'ont pu être trouvées. En voici la raison: +'error'</p>")))
        //console.log(str);
        
        
        }

    });
