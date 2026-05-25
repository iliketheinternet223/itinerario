const botao1 = document.getElementById("dieta1");
const menu = document.getElementById("Menu1");

botao1.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    menu4.classList.remove("ativo");
    menu2.classList.remove("ativo");
    menu3.classList.remove("ativo");
    menu5.classList.remove("ativo");
});

const botao2 = document.getElementById("dieta2");
const menu2 = document.getElementById("Menu2");

botao2.addEventListener("click", () => {
    menu2.classList.toggle("ativo");

    menu.classList.remove("ativo");
    menu4.classList.remove("ativo");
    menu3.classList.remove("ativo");
    menu5.classList.remove("ativo");
});

const botao3 = document.getElementById("dieta3");
const menu3 = document.getElementById("Menu3");

botao3.addEventListener("click", () => {
    menu3.classList.toggle("ativo");

    menu.classList.remove("ativo");
    menu2.classList.remove("ativo");
    menu4.classList.remove("ativo");
    menu5.classList.remove("ativo");
});

const botao4 = document.getElementById("dieta4");
const menu4 = document.getElementById("Menu4");

botao4.addEventListener("click", () => {
    menu4.classList.toggle("ativo");

    menu.classList.remove("ativo");
    menu2.classList.remove("ativo");
    menu3.classList.remove("ativo");
    menu5.classList.remove("ativo");
});

const botao5 = document.getElementById("dieta5");
const menu5 = document.getElementById("Menu5");

botao5.addEventListener("click", () => {
    menu5.classList.toggle("ativo");

    menu.classList.remove("ativo");
    menu2.classList.remove("ativo");
    menu3.classList.remove("ativo");
    menu4.classList.remove("ativo");
});
