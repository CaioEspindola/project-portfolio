var aba1Selecionada = document.getElementById("tab-about-me");

aba1Selecionada.addEventListener("click", () => {
  const aba1 = document.getElementById("information-about-me");
  const aba2 = document.getElementById("information-social-media");

  aba1.classList.remove("tab_hide");
  aba2.classList.add("tab_hide");
});

var aba2Selecionada = document.getElementById("tab-social-media");

aba2Selecionada.addEventListener("click", () => {
  const aba1 = document.getElementById("information-about-me");
  const aba2 = document.getElementById("information-social-media");

  aba1.classList.add("tab_hide");
  aba2.classList.remove("tab_hide");
});
