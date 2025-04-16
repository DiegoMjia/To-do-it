<script setup lang="ts"></script>

<template>
  <div class="containerContent">
    <div class="container">
      <section class="presentation">
        <div style="font-size: 60px; font-weight: bold">X</div>
        <h1>Bienvenido a nuestro sitio.</h1>
        <p style="max-width: 520px;">
          To-do-it es una aplicación que le permite organizar su día de la
          manera más eficiente posible. Le recomendamos seguirnos en nuestras
          redes sociales para estar al tanto de cualquier novedad.
        </p>
        <div class="Icons">
          <div class="twitterSocial"></div>
          <div class="youtubeSocial"></div>
          <div class="gitHub"></div>
        </div>
      </section>

      <div class="Separator"></div>

      <section class="sesionStart">
        <h2>Iniciar sesión</h2>
        <br>
        <div class="sectionSesion">
          <input type="email" placeholder="Ingresa tu correo electrónico" />
          <br />
          <br>
          <input type="password" placeholder="Ingresa tu contraseña" />
        </div>
        <div class="forget" style="top: 15px; position: relative; padding-left: 2px;">
          <button>Iniciar</button>
          <span style="position: absolute; font-size: 15px; right: 0;">
            <a href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </span>
        </div>
        <p style="position: relative; top: 20px;">¿Necesitas una cuenta? <a href="#">Regístrate aquí</a></p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.containerContent {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  z-index: 100;
  position: relative;
  flex-direction: row;
  min-width: 80vw;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.Icons {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 7px;
  justify-content: flex-start;
}

.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 60px;
}

input {
  height: 40px;
  width: 340px;
  margin-bottom: 10px;
}

.presentation {
  width: 90%;
  text-align: left;
  text-wrap: wrap;
  display: flex;
  flex-direction: column;
}

.sesionStart {
  width: 470px;
  display: flex;
  text-align: left;
  flex-direction: column;
}

.twitterSocial {
  background-image: url("/src/assets/twitterIcon/twitterWhite.svg");
  width: 30px;
  height: 30px;
  background-size: cover;
  margin: 5px;
  cursor: pointer;
}

.gitHub {
  background-image: url("/src/assets/gitHubIcon/githubWhite.svg");
  width: 30px;
  height: 30px;
  background-size: cover;
  margin: 5px;
  cursor: pointer;
}

.youtubeSocial {
  background-image: url("/src/assets/youtubeIcons/youtubeWhite.svg");
  width: 30px;
  height: 30px;
  background-size: cover;
  margin: 5px;
  cursor: pointer;
}

.Separator {
  position: absolute;
  top: 0;
  left: 60%;
  width: 1px;
  height: 100%;
  background-color: #d9d9d9;
  padding: 1px;
  margin: 0 20px;
}

button {
  user-select: none;
  width: 160px;
  height: 50px;
  border-radius: 5px;
}
</style>
