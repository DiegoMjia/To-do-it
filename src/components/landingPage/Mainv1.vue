<script setup lang="ts">
import Footer from "../landingPage/Footer.vue"
</script>

<template>
  <div>
    <div class="ContainerMain1">
      <section class="Section1">
        <h1>¡Mantén el orden de tus tareas!</h1>
        <section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ex voluptatum ipsam numquam et perspiciatis accusantium quam, non
            labore rem ducimus ratione quis harum dolores saepe odio? Sint, nisi
            aut. Repellat illo quis ut ad ipsa vitae at praesentium omnis, nulla
            earum labore fugit repellendus, beatae incidunt soluta pariatur,
            esse facere quibusdam veniam quae modi! Consequuntur magnam saepe
            rerum nobis? Totam ducimus nulla enim cum doloremque laudantium
            voluptates ea dicta corrupti, debitis assumenda quidem deserunt!
            Esse, aperiam sit sapiente rerum quidem eligendi, iusto porro ut
            consequuntur facilis nemo, voluptas accusantium.
          </p>
        </section>
        <RouterLink to="/showTasks">¡Empezar!</RouterLink>
      </section>
      <lite-youtube videoid="H0Sbna9rxog" class="PresentatioVideo"></lite-youtube>
    </div>
    <hr class="hrSub" />
  </div>

  <section class="sectionCointainer">
    <h2 class="titleFunciones">CONTAMOS CON LAS SIGUIENTES FUNCIONES!</h2>
    <div class="container">
      <div class="Iaherta">
        <h3>HABLAR CON LA IA</h3>
        <img class="herta" src="../../assets/img/herta.jpg" alt="herta" title="que me ves puto1" />
        <p class="description">La IA actúa como un chatbot con el que los usuarios pueden conversar para resolver dudas
          sobre el uso de la aplicación, cómo organizar sus tareas o incluso cómo utilizar funcionalidades específicas.
          Esto facilita el acceso a ayuda sin necesidad de buscar en manuales o tutoriales.</p>

      </div>

      <div>
        <h3>AGREGAR TAREAS</h3>
        <img class="feixiao" src="../../assets/img/feixiaonotas.jpg" alt="feixiaonotas" title="que me ves puto2" />
        <p class="description">Una de las funciones esenciales de nuestra To-Do List es la capacidad de agregar tareas
          de forma práctica y personalizada. Esta característica permite al usuario registrar cualquier actividad,
          compromiso o recordatorio que necesite gestionar durante el día, la semana o el mes.</p>
      </div>

      <div>
        <h3>PRIORIDADES</h3>
        <img class="castoriceeeeee" src="../../assets/img/castoriceeeeee.jpg" alt="castoriceeeee"
          title="que me ves puto3" />
        <p class="description">permite a los usuarios organizar sus actividades diarias, semanales o mensuales de manera
          eficiente. Una de las funciones clave para mejorar la gestión del tiempo es la posibilidad de asignar
          prioridades a cada tarea. Estas prioridades se suelen clasificar en tres niveles: alta, media y baja. </p>
      </div>
    </div>
  </section>

  <div>
    <div class="ContainerTwo">
      <lite-youtube videoid="1vRvidWRF5Y" class="VideoIa"></lite-youtube>
      <section class="SectionTwo">
        <h2>EJEMPLO DE LA IA</h2>
        <section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ex voluptatum ipsam numquam et perspiciatis accusantium quam, non
            labore rem ducimus ratione quis harum dolores saepe odio? Sint, nisi
            aut. Repellat illo quis ut ad ipsa vitae at praesentium omnis, nulla
            earum labore fugit repellendus, beatae incidunt soluta pariatur,
            esse facere quibusdam veniam quae modi! Consequuntur magnam saepe
            rerum nobis? Totam ducimus nulla enim cum doloremque laudantium
            voluptates ea dicta corrupti, debitis assumenda quidem deserunt!
            Esse, aperiam sit sapiente rerum quidem eligendi, iusto porro ut
            consequuntur facilis nemo, voluptas accusantium.
          </p>
        </section>

      </section>

    </div>
  </div>
  <Footer></Footer>
</template>


<style scoped>
a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  cursor: pointer;
  width: 200px;
  background-color: #414bb2;
}

a:hover {
  background-color: #3e4593;
  color: #fff;
}

.ContainerMain1 {
  display: flex;
  height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

.ContainerTwo {
  display: flex;
  height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

.SectionTwo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 5%;
  max-width: 40%;
  margin-left: 20px;
}

.PresentatioVideo {
  max-width: 620px;
}

.VideoIa {
  width: 620px;
}

button:hover {
  background-color: #3e4593;
}

.hrSub {
  opacity: 0.2;
  margin: 20px;
}

svg {
  position: absolute;
  left: 220px;
  top: 320px;
  z-index: 1;
  opacity: 0.6;
  padding: 0;
}

.svgWhite {
  display: none;
}

.Section1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 5%;
  max-width: 40%;
  margin-left: 20px;
}

.feixiao {
  width: 300px;
}

.herta {
  width: 300px;
}

.castoriceeeeee {
  width: 300px;
}

.container {
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  width: 400px;
  height: 700px;
  box-sizing: border-box;
  text-align: center;
}

.IaHerta {
  width: 200px;
  height: 200px;
  border: 10px solid red;
}

.titleFunciones {
  margin: 3%;
  size: 300%;
}

.description {
  font-size: 16px;
  text-align: center;
  max-width: 600px;
  margin: 20px auto 0;
  word-wrap: break-word;
}
</style>

<style>
body.active {
  .svgWhite {
    display: block;
  }

  .hrSub {
    opacity: 1;
    color: #000;
  }
}
</style>
