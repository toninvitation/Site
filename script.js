const menu = document.querySelector("nav");
const botao = document.getElementById("menu-mobile");

botao.addEventListener("click", () => {

    menu.classList.toggle("ativo");
    botao.classList.toggle("aberto");

});

