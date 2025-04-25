<script setup lang="ts">
import InputText from "primevue/inputtext";
</script>

<template>
  <div class="containerContent">
    <div class="container">
      <div class="iconUser"></div>
      <div class="title">
        <span>------------</span>
        <h1 style="display: inline-block">Crea una cuenta</h1>
        <span>------------</span>
      </div>
      <p>Crea una cuenta para poder acceder a todas las funcionalidades.</p>
      <section class="registerAccount">
        <IftaLabel>
          <InputText
            type="email"
            id="email"
            variant="filled"
            placeholder="Ingresa tu correo electrónico"
          />
          <br />
          <br />
          <InputText
            type="password"
            id="password"
            variant="filled"
            placeholder="Ingresa tu contraseña"
          />
        </IftaLabel>
        <br />
        <p>Oh, si prefieres.</p>
        <button class="GoogleSesion">
          <div class="iconGoogle"></div>
          <p>Iniciar sesión con Google</p>
        </button>
        <button type="submit">Crear cuenta</button>
        <p>
          ¿Ya tienes una cuenta? <RouterLink to="/">Inicia sesión</RouterLink>
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
  min-height: 100vh;
}

.title {
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
  margin-bottom: 30px;
}

.GoogleSesion {
  width: 90%;
  background-color: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

span {
  padding: 0 10px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid #fff;
  padding: 90px;
  border-radius: 15px;
}

.iconUser {
  background-image: url("../../assets/icons/UserIconWhite.svg");
  background-size: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.registerAccount {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
}

input {
  width: 340px;
  outline: none;
  border: 1px solid #fff;
}

#email:focus,
#password:focus {
  border: 1px solid #414bb2;
}

button {
  width: 160px;
  height: 50px;
  border-radius: 5px;
  background-color: #414bb2;
  cursor: pointer;
  margin: 15px;
}

.iconGoogle {
  background-image: url("../../assets/icons/GoogleIcon.png");
  background-size: cover;
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

body.active {
  .container {
    outline: none;
    box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);
    background-color: rgb(210, 210, 210);
    color: black;
    border: 1px solid #ffffff00;
  }

  #email:focus,
  #password:focus {
    border: 1px solid #ffffff00;
  }

  .iconUser {
    background-image: url("../../assets/icons/UserIconBlack.svg");
  }

  .GoogleSesion {
    color: #000;
    border: 1px solid #000;
  }

  .GoogleSesion:hover {
    background-color: #101223ed;
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
  }
}
</style>
