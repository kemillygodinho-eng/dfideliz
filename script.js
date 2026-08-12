/* =========================
   CURTIDAS E DESLIKES
========================= */

let likes = 0;
let dislikes = 0;

const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

const likesSpan = document.getElementById("likes");
const dislikesSpan = document.getElementById("dislikes");


likeBtn.addEventListener("click", () => {

  likes++;

  likesSpan.textContent = likes;

  likeBtn.classList.toggle("ativo");

});


dislikeBtn.addEventListener("click", () => {

  dislikes++;

  dislikesSpan.textContent = dislikes;

  dislikeBtn.classList.toggle("ativo");

});


/* =========================
   COMENTÁRIOS
========================= */

const comentarBtn =
  document.getElementById("comentarBtn");

const comentarioInput =
  document.getElementById("comentarioInput");

const listaComentarios =
  document.getElementById("listaComentarios");


comentarBtn.addEventListener("click", adicionarComentario);


function adicionarComentario() {

  const texto =
    comentarioInput.value.trim();


  if (texto === "") {

    alert("Digite um comentário antes de publicar.");

    comentarioInput.focus();

    return;
  }


  const comentario =
    document.createElement("div");

  comentario.classList.add("comentario-item");

  comentario.textContent = texto;


  listaComentarios.prepend(comentario);


  comentarioInput.value = "";

}


/* =========================
   MODO CLARO / ESCURO
========================= */

const temaBtn =
  document.getElementById("temaBtn");


function atualizarBotaoTema() {

  if (document.body.classList.contains("tema-claro")) {

    temaBtn.textContent = "☀️ Modo claro";

    temaBtn.setAttribute(
      "aria-label",
      "Ativar modo escuro"
    );

  } else {

    temaBtn.textContent = "🌙 Modo escuro";

    temaBtn.setAttribute(
      "aria-label",
      "Ativar modo claro"
    );

  }

}


temaBtn.addEventListener("click", () => {

  document.body.classList.toggle("tema-claro");


  const temaAtual =
    document.body.classList.contains("tema-claro")
      ? "claro"
      : "escuro";


  localStorage.setItem(
    "tema",
    temaAtual
  );


  atualizarBotaoTema();

});


/* =========================
   RECUPERAR TEMA SALVO
========================= */

const temaSalvo =
  localStorage.getItem("tema");


if (temaSalvo === "claro") {

  document.body.classList.add("tema-claro");

}


atualizarBotaoTema();