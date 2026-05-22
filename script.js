const botao1 = document.getElementById("dieta1");
const menu = document.getElementById("Menu1");

botao1.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    menu2.classList.remove("ativo");
    menu3.classList.remove("ativo");
});

const botao2 = document.getElementById("dieta2");
const menu2 = document.getElementById("Menu2");

botao2.addEventListener("click", () => {
    menu2.classList.toggle("ativo");
    menu.classList.remove("ativo");
    menu3.classList.remove("ativo");
});

const botao3 = document.getElementById("dieta3");
const menu3 = document.getElementById("Menu3");

botao3.addEventListener("click", () => {
    menu3.classList.toggle("ativo");
    menu.classList.remove("ativo");
    menu2.classList.remove("ativo");
});