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