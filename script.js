const menus = [1, 2, 3, 4, 5].map(i => ({
    botao: document.getElementById(`dieta${i}`),
    menu: document.getElementById(`Menu${i}`)
}));

menus.forEach((item, index) => {
    item.botao.addEventListener("click", () => {
        item.menu.classList.toggle("ativo");
        menus.forEach((m, i) => {
            if (i !== index) m.menu.classList.remove("ativo");
        });
    });
});

const contato = document.getElementById("raparigacarente");
contato.addEventListener("click", () => {
    const menuContato = document.getElementById("Menu6");
    menuContato.classList.toggle("ativo");
    menus.forEach(m => m.menu.classList.remove("ativo"));
});

document.addEventListener("click", (evento) => {
    const clickmenu = evento.target.closest(".Menu");
    const clickcontate = evento.target.closest("#raparigacarente");
    const clickbotao = evento.target.closest(".botão");

    if (!clickmenu && !clickcontate && !clickbotao) {
        menus.forEach(m => m.menu.classList.remove("ativo"));
        const menuContato = document.getElementById("Menu6");
        menuContato.classList.remove("ativo");
    }
});