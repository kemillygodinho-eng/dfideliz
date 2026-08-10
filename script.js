```css
/* ==============================
   RESET
============================== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* ==============================
   VARIÁVEIS DO TEMA ESCURO
============================== */

:root {

  --fundo: #160f0f;
  --card: #241717;
  --card-hover: #2e1c1c;

  --texto: #ffffff;
  --texto-secundario: #d8caca;

  --vermelho: #c1121f;
  --vermelho-escuro: #8f1d1d;

  --dourado: #dcb48f;

  --campo: #1c1313;

  --footer: #0c0909;

  --sombra: rgba(0, 0, 0, 0.35);
}


/* ==============================
   TEMA CLARO
============================== */

body.light-mode {

  --fundo: #f4eeee;
  --card: #ffffff;
  --card-hover: #fff8f8;

  --texto: #241717;
  --texto-secundario: #5d4c4c;

  --vermelho: #b51220;
  --vermelho-escuro: #8f1d1d;

  --dourado: #8b5e34;

  --campo: #ffffff;

  --footer: #211717;

  --sombra: rgba(0, 0, 0, 0.15);
}


/* ==============================
   BODY
============================== */

body {

  background: var(--fundo);

  color: var(--texto);

  font-family: 'Poppins', sans-serif;

  line-height: 1.8;

  transition:
    background 0.4s ease,
    color 0.4s ease;
}


/* ==============================
   BOTÃO DO TEMA
============================== */

.theme-btn {

  position: fixed;

  top: 20px;
  right: 20px;

  z-index: 999;

  background: rgba(0, 0, 0, 0.75);

  color: white;

  border: 1px solid rgba(255,255,255,0.2);

  padding: 12px 18px;

  border-radius: 30px;

  cursor: pointer;

  font-family: 'Poppins', sans-serif;

  font-weight: 600;

  transition: 0.3s;

  backdrop-filter: blur(8px);
}


.theme-btn:hover {

  background: var(--vermelho);

  transform: scale(1.05);
}


body.light-mode .theme-btn {

  background: #241717;
}


/* ==============================
   HERO
============================== */

.hero {

  height: 80vh;

  background:
    linear-gradient(
      rgba(25, 10, 10, 0.55),
      rgba(70, 0, 0, 0.80)
    ),
    url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_QJbV8LNVeQgyRLwDRm5z93fVYrzuNvXWyY0D_MDJQ&s=10');

  background-size: cover;

  background-position: center 70%;

  background-repeat: no-repeat;

  display: flex;

  justify-content: center;

  align-items: center;

  text-align: center;
}


.overlay {

  padding: 20px;

  animation: aparecer 1s ease;
}


@keyframes aparecer {

  from {

    opacity: 0;

    transform: translateY(25px);
  }

  to {

    opacity: 1;

    transform: translateY(0);
  }
}


.diario {

  color: #c89f74;

  letter-spacing: 4px;

  margin-bottom: 20px;

  font-weight: 600;
}


.hero h1 {

  font-family: 'Oswald', sans-serif;

  font-size: clamp(3rem, 10vw, 5rem);

  color: #ffffff;

  letter-spacing: 5px;
}


.subtitulo {

  color: #e3c3a2;

  margin-top: 15px;
}


/* ==============================
   CONTEÚDO
============================== */

main {

  width: 90%;

  max-width: 1200px;

  margin: 50px auto;
}


/* ==============================
   GRADE DE POSTAGENS
============================== */

.posts-grid {

  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(300px, 1fr));

  gap: 25px;

  margin-bottom: 35px;
}


/* ==============================
   CARDS
============================== */

.card {

  background: var(--card);

  border-left: 6px solid var(--vermelho-escuro);

  padding: 30px;

  margin-bottom: 35px;

  border-radius: 18px;

  box-shadow:
    0 10px 30px var(--sombra);

  transition:
    background 0.4s ease,
    color 0.4s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}


.posts-grid .card {

  margin-bottom: 0;

  min-height: 100%;
}


.card:hover {

  transform: translateY(-6px);

  background: var(--card-hover);

  box-shadow:
    0 15px 35px var(--sombra);
}


.card h2 {

  color: var(--dourado);

  margin-bottom: 20px;

  font-family: 'Oswald', sans-serif;

  font-size: 1.8rem;
}


.card p {

  color: var(--texto-secundario);

  margin-bottom: 15px;
}


.card strong {

  color: var(--dourado);
}


/* ==============================
   CURTIDAS
============================== */

.acoes {

  margin-top: 25px;

  display: flex;

  flex-wrap: wrap;

  gap: 10px;
}


.acoes button {

  background: var(--campo);

  color: var(--texto);

  border: 1px solid var(--vermelho-escuro);

  padding: 12px 20px;

  border-radius: 12px;

  cursor: pointer;

  font-family: 'Poppins', sans-serif;

  transition: 0.3s;
}


.acoes button:hover {

  background: var(--vermelho);

  color: white;

  transform: translateY(-2px);
}


.acoes button.ativo {

  background: var(--vermelho);

  color: white;
}


/* ==============================
   LISTA DE MÚSICAS
============================== */

.musicas {

  padding-left: 25px;

  color: var(--texto-secundario);
}


.musicas li {

  margin-bottom: 10px;

  transition: 0.2s;
}


.musicas li:hover {

  color: var(--dourado);

  transform: translateX(5px);
}


/* ==============================
   GALERIA
============================== */

.galeria {

  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(220px, 1fr));

  gap: 20px;
}


.galeria img {

  width: 100%;

  height: 280px;

  object-fit: cover;

  border-radius: 12px;

  border: 3px solid var(--vermelho-escuro);

  transition: 0.4s;

  cursor: pointer;
}


.galeria img:hover {

  transform: scale(1.04);

  border-color: var(--vermelho);

  box-shadow:
    0 10px 25px var(--sombra);
}


/* ==============================
   COMENTÁRIOS
============================== */

textarea {

  width: 100%;

  min-height: 120px;

  background: var(--campo);

  color: var(--texto);

  border: 1px solid var(--vermelho-escuro);

  border-radius: 10px;

  padding: 15px;

  margin-bottom: 15px;

  resize: vertical;

  font-family: 'Poppins', sans-serif;
}


textarea:focus {

  outline: none;

  border-color: var(--vermelho);

  box-shadow:
    0 0 0 3px rgba(193, 18, 31, 0.15);
}


textarea::placeholder {

  color: var(--texto-secundario);
}


#comentarBtn {

  background: var(--campo);

  color: var(--texto);

  border: 1px solid var(--vermelho-escuro);

  padding: 12px 20px;

  border-radius: 12px;

  cursor: pointer;

  font-family: 'Poppins', sans-serif;

  transition: 0.3s;
}


#comentarBtn:hover {

  background: var(--vermelho);

  color: white;
}


.comentario-item {

  background: var(--campo);

  color: var(--texto);

  border-left: 4px solid var(--vermelho);

  padding: 15px;

  border-radius: 10px;

  margin-top: 15px;

  animation: comentario 0.3s ease;
}


@keyframes comentario {

  from {

    opacity: 0;

    transform: translateY(-10px);
  }

  to {

    opacity: 1;

    transform: translateY(0);
  }
}


/* ==============================
   FOOTER
============================== */

footer {

  background: var(--footer);

  text-align: center;

  padding: 25px;

  color: #cfcfcf;
}


/* ==============================
   TABLETS
============================== */

@media (max-width: 768px) {

  .hero {

    height: 65vh;
  }


  main {

    width: 94%;

    margin: 30px auto;
  }


  .posts-grid {

    grid-template-columns: 1fr;
  }


  .theme-btn {

    top: 10px;

    right: 10px;

    font-size: 0;

    width: 45px;

    height: 45px;

    padding: 0;
  }


  .theme-btn::before {

    content: "🌙";

    font-size: 20px;
  }


  .galeria {

    grid-template-columns:
      repeat(2, 1fr);
  }


  .galeria img {

    height: 220px;
  }

}


/* ==============================
   CELULARES
============================== */

@media (max-width: 450px) {

  .hero h1 {

    font-size: 3rem;

    letter-spacing: 3px;
  }


  .subtitulo {

    font-size: 0.9rem;
  }


  .card {

    padding: 22px;
  }


  .galeria {

    grid-template-columns: 1fr;
  }


  .galeria img {

    height: 300px;
  }

}
```

