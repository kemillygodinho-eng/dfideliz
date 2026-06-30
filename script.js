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

const comentarBtn =
document.getElementById("comentarBtn");

const comentarioInput =
document.getElementById("comentarioInput");

const listaComentarios =
document.getElementById("listaComentarios");

comentarBtn.addEventListener("click", () => {

  const texto =
  comentarioInput.value.trim();

  if(texto === ""){
    alert("Digite um comentário.");
    return;
  }

  const comentario =
  document.createElement("div");

  comentario.classList.add(
    "comentario-item"
  );

  comentario.textContent = texto;

  listaComentarios.prepend(comentario);

  comentarioInput.value = "";
});
