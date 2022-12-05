var aba1Selecionada = document.getElementById("sobre-mim");

aba1Selecionada.addEventListener("click", () => {
  const aba1 = document.getElementById("informacao-sobre-min");
  const aba2 = document.getElementById("informacao-minhas-redes");

  aba1.classList.remove("tab_hide");
  aba2.classList.add("tab_hide");
});

var aba2Selecionada = document.getElementById("minhas-redes");

aba2Selecionada.addEventListener("click", () => {
  const aba1 = document.getElementById("informacao-sobre-min");
  const aba2 = document.getElementById("informacao-minhas-redes");

  aba1.classList.add("tab_hide");
  aba2.classList.remove("tab_hide");
});
