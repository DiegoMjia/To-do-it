<script setup lang="ts">
import InputText from "primevue/inputtext";
import { reactive } from "vue";

const credentials = reactive({
  email: "",
  password: "",
});


const registerAccount = async () => {
  console.log('¿Esta entrando a la funcion?');
  console.log(credentials.email, credentials.password);
  if (
    credentials.email.length > 0 &&
    credentials.password.length > 0 &&
    credentials.email.includes("@") &&
    credentials.email.includes(".")
  ) {
    alert("Registrando...");
  }
};
</script>

<template>
  <div class="containerContent">
    <form method="dialog">
      <button class="closeButton">X</button>
    </form>
    <div class="container">
      <section class="presentation">
        <form method="dialog">
          <button class="closeButtonV2">X</button>
        </form>
        <h1>Bienvenido a nuestro sitio</h1>
        <p style="max-width: 520px">
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
        <br />
        <div class="sectionSesion">
        
          <IftaLabel>
            <InputText type="email" id="email" variant="filled" v-model="credentials.email" placeholder="Ingresa tu correo electrónico" />
            <br>
            <br>
            <InputText type="password" id="password" variant="filled" v-model="credentials.password" placeholder="Ingresa tu contraseña" />
          </IftaLabel>
        </div>
        <div
          class="forget"
          style="top: 15px; position: relative; padding-left: 2px"
        >
          <button style="background-color: #414bb2; cursor: pointer;" @click="registerAccount">Iniciar</button>
          <span style="position: absolute; font-size: 15px; right: 0">
            <a href="#"> ¿Olvidaste tu contraseña? </a>
          </span>
        </div>
        <p style="position: relative; top: 20px">
          ¿Necesitas una cuenta? <RouterLink to="/CreateAccount">Regístrate aquí</RouterLink>
        </p>
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

  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);

}

.closeButtonV2 {
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: none;
  height: min-content;
  width: min-content;
}

.closeButton {
  background-color: transparent;
  border: none;
  width: min-content;
  user-select: none;
  font-size: 40px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 7px;
  cursor: pointer;
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

#email:focus, #password:focus {
  border: 1px solid #414bb2;
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

<style>
body.active {
  .closeButton {
    color: #000000;
  }

  .closeButtonV2 {
    color: #000000;
  }

  .Separator {
    background-color: #000000;
  }

  #email:focus, #password:focus {
    border: 1px solid #ffffff00;
    background-color: #343434;
    color: #fff;
  }
  
  #email, #password {
    color: #0f0f0f;
    border: 1px solid #ffffff00;
    background-color: #ededed;
  }

  .youtubeSocial {
    background-image: url("/src/assets/youtubeIcons/youtubeBlack.svg");
    background-size: cover;
  }

  .gitHub {
    background-image: url("/src/assets/gitHubIcon/githubBlack.svg");
    background-size: cover;
  }

  .twitterSocial {  
    background-image: url("/src/assets/twitterIcon/twitterBlack.svg");
    background-size: cover;
  }
}
</style>
