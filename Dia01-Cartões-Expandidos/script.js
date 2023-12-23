const paineis = document.querySelector(".painel");

console.forEach((painel) => {
  painel.addEventListener("click", () => {
    removeActiveClasses();
    painel.classList.add("ativo");
  });
});

function removerClassesAtivas() {
  paineis.forEach((painel) => {
    painel.classList.remove("ativo");
  });
}
