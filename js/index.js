document.addEventListener("DOMContentLoaded", function () {
  const nomeElemento = document.getElementById("nome");
  const underlineElemento = document.getElementById("underline");
  const nome = "Diego";
  let index = 0;
  let isUnderlineVisible = false;

  function digitarNome() {
    if (!isUnderlineVisible) {
      underlineElemento.style.visibility = "visible";
      isUnderlineVisible = true;
    } else {
      nomeElemento.textContent = nome.substring(0, index);
      index++;
      if (index > nome.length) {
        clearInterval(intervalId);
      }
    }
  }

  if (nomeElemento && underlineElemento) {
    const intervalId = setInterval(digitarNome, 400);
  }
});
