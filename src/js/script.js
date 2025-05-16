//Declarando as variaveis

const hamburguer = document.querySelector(".hamburguer");
const headerMenu = document.querySelector(".header-menu");

//criando a função toogle

function toggleMenu(){
    hamburguer.classList.toggle("active");
    headerMenu.classList.toggle("active");
}

//Criando o evento

hamburguer.addEventListener('click',toggleMenu);
headerMenu.addEventListener('click',(e)=>{
    if(e.target.classList.contains('item-menu')){
        toggleMenu();
    }
})