window.addEventListener("scroll", function () {
    var header;
    document.querySelector("header").classList.toggle("sticky", window.scrollY > 150);
});

document.getElementById("btn_open").addEventListener("click", open_close_menu);

var nav_menu = document.getElementById("Nav");


function open_close_menu() {
    nav_menu.classList.toggle('nav_open');
};


let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

//Animaciones de la pagina (BarbaJs)

function pageTransition() {

    var tl = gsap.timeline();

    tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2 })
    tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
    tl.to(".Content", { duration: 0.5, opacity: 1, delay: -0.5 })

}


function  contentAnimation(){
    var tl = gsap.timeline();

    tl.from(".anim-nav", { duration: 0.9, translateY: -100, opacity: 0, stagger: 0.1, delay: 1 }),
    tl.to("#txt-parallax-1", { duration: 0.9, translateY: -50, opacity: 1, delay: -0.6 }),
    tl.to("#txt-parallax-2", { duration: 0.9, translateY: -60, opacity: 1, delay: -0.5 }),
    tl.to("#txt-parallax-3", { duration: 0.9, translateY: -60, opacity: 1, delay: -0.4 });
}


function delay(n) {
    n = n || 3000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({

    sync: true,

    transitions: [{

        async leave(data) {
            const donde = this.async();

            pageTransition();
            await DelayNode(1500);
            donde();
        },

        async enter(data) {
            pageTransition();
            contentAnimation();
            window.scrollTo(0, 0);   
        },

        async once(data) {
            pageTransition();
            contentAnimation();
        }
    }]
})