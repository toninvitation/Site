const menu = document.getElementById("menu");
const botao = document.getElementById("menu-mobile");

botao.addEventListener("click", () => {

    menu.classList.toggle("ativo");
    botao.classList.toggle("aberto");

});

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("ativo");
        botao.classList.remove("aberto");

    });

});