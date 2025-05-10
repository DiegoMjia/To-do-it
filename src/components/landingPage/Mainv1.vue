<script setup lang="ts">
import Footer from "../landingPage/Footer.vue"


</script>

<template>
  <div>
    <div class="ContainerMain1">
      <section class="Section1">
        <h1>¡Mantén el orden de tus tareas!</h1>
        <section>
          <p class="taskstitle">
            Nuestra lista de tareas te ayuda a enfocarte en lo que realmente importa. <br>
            Crea, edita y completa tus pendientes con facilidad, y mantén tu productividad al <br>
            máximo.  Ya sea para el trabajo, los estudios o tu vida personal, aquí tienes el espacio <br> 
            ideal  para tener todo bajo control.
          </p>
        </section>
        <button>¡Empezar!</button>
      </section>
      <lite-youtube videoid="H0Sbna9rxog" class="PresentatioVideo"></lite-youtube>
    </div>
    <hr class="hrSub" />
  </div>

  <div>
    <div class="Container">
      <h2 class="Title">CONTAMOS CON LAS SIGUIENTES FUNCIONES!</h2>
      <section class="section2">
        <div class="herta card">
          <h3>CHAT CON IA</h3>
          <img class="imagen" src="../../assets/img/herta.jpg" alt="herta" title="que me ves puto1" />
          <p class="pcausa"> <Strong>
              La IA actúa como un chatbot con<br>
              el que los usuarios pueden <br>
              conversar para resolver dudas <br>
              sobre el uso de la aplicación, <br>
              cómo organizar sus tareas <br>
              o incluso cómo utilizar <br>
              funcionalidades específicas. <br>
              Esto facilita el acceso a ayuda <br>
              sin necesidad de buscar en manuales o tutoriales.
            </Strong></p>
        </div>
        <div class="Feixiao card">
          <h3>AGREGAR TAREAS</h3>
          <img class="imagen" src="../../assets/img/feixiaonotas.jpg" alt="feixiaonotas" title="que me ves puto2" />
          <p class="pcausa"> <strong>
              Una de las funciones <br>
              esenciales de nuestra To-Do List
              es la capacidad de agregar <br>
              tareas de forma práctica Y
              personalizada. Esta característica <br>
              permite al usuario registrar <br>
              cualquier actividad,compromiso o recordatorio que necesite <br>
              gestionar durante el día, la semana o el mes.
            </strong></p>
        </div>
        <div class="Castorice card">
          <h3>PRIORIDADES</h3>
          <img class="imagen" src="../../assets/img/castoriceeeeee.jpg" alt="castoriceeeee" title="que me ves puto3" />
          <p class="pcausa">
            <strong>
              permite a los usuarios <br>
              organizar sus actividades diarias, semanales   o mensuales <br>
              de manera eficiente. Una de las funciones clave para mejorar <br>
              la gestión del tiempo es la posibilidad de asignar <br>
              prioridades a cada tarea. Estas prioridades se suelen <br>
              clasificar en tres niveles: <br>
              alta, media y baja.
            </strong>
          </p>
        </div>


      </section>
    </div>
    <hr class="hrSub" />
  </div>


  <div class="SectionThree">
  <div class="ContainerExample">
    <lite-youtube videoid="GEVQTKyqi6Q" class="PresentatioVideo2"></lite-youtube>
    <div class="text-container">
      <h2>Ejemplo de uso de IA</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias vitae tempore eius libero quaerat, incidunt quae. Inventore placeat, blanditiis consequuntur id aut minus perspiciatis quod soluta distinctio illum aperiam?
      Perferendis, aut nulla earum totam praesentium minus sed laudantium dolorum voluptas vero illum eos magnam velit ut, asperiores culpa et! Alias magni totam, assumenda ex delectus accusantium mollitia earum ad?
      Perferendis mollitia odit quam quod dignissimos ipsa quis tenetur, adipisci, ducimus optio beatae ut sit illo amet culpa explicabo. Ratione, facilis praesentium nihil placeat adipisci eius quidem temporibus excepturi dolorem.
      Ratione quam, ipsa ad perferendis dignissimos, odio repellendus pariatur dolorum quo quis suscipit aut nostrum doloremque voluptas cum! Dicta ducimus repellat maiores voluptas aperiam inventore veritatis perferendis obcaecati eos distinctio!
      Dolores explicabo ratione voluptatibus quasi repudiandae sed molestias distinctio, maiores omnis modi? At aut voluptates perferendis unde inventore vel molestias! Mollitia ducimus aspernatur rem iusto possimus, ut eos vel soluta.
      Rerum ullam pariatur libero laudantium, delectus, nemo exercitationem vitae vel deleniti, neque iusto quaerat perspiciatis. Debitis, illo! Cupiditate, ullam delectus architecto provident, tenetur, culpa quae quibusdam aliquid nihil odit commodi?</p>
    </div>
  </div>
</div>
        <Footer></Footer>
</template>


<style scoped>

.SectionThree {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200vh;
  height: 700px;
  margin: 0 auto;
  
}

.ContainerExample {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-areas: 
    "video title"
    "video text";
  gap: 20px;
  width: 100%;
}

.ContainerExample h2 {
  grid-area: title;
  margin-bottom: 60px;
  font-size: 30px;
}

.ContainerExample lite-youtube {
  grid-area: video;
  width: 100%;
  height: 100%;
  box-shadow: 0 -0em 3em rgba(131, 62, 122, 0.945), 0.3em 0.3em 1em rgba(255, 255, 255, 0.123);
}

.ContainerExample p {
  grid-area: text;
}

.taskstitle {
  font-size: 20px;
}
button {
  height: 60px;
  cursor: pointer;
  width: 200px;
  border-radius: 5px;
  background-color: #414bb2;
  box-shadow: inset 0 -3em 3em rgba(255, 67, 239, 0.5), 0.3em 0.3em 1em rgba(0, 0, 0, 0.6);
  border: none;
  outline: none;
}

.ContainerMain1 {
  display: flex;
  height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

.Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.pcausa {
  text-align: center;
  font-size: 100%;
  padding: 10%;
}

.Title {
  font-size: 40px;
  text-align: center;
  margin: 100px;
}

.section2 {
  display: flex;
  width: 90%;
  max-width: 1200px;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  box-sizing: border-box;
}




.herta,
.Feixiao,
.Castorice {
  width: 33.33%;
  height: auto;
  min-height: 60vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
}


.herta {
  box-shadow: inset 0 -3em 3em rgba(199, 104, 255, 0.3), 0.3em 0.3em 1em rgba(111, 0, 255, 0.6);
}

.Feixiao {
  box-shadow: inset 0 -3em 3em rgba(68, 218, 255, 0.3), 0.3em 0.3em 1em rgba(18, 150, 143, 0.6);
}

.Castorice {
  box-shadow: inset 0 -3em 3em rgba(130, 138, 255, 0.3), 0.3em 0.3em 1em rgba(134, 18, 150, 0.6);
}

.imagen {
  width: 100%;
  max-width: 300px;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: inset 0 -3em 3em rgba(255, 255, 255, 0.3), 0 0 0 2px white, 0.3em 0.3em 1em rgba(255, 255, 255, 0.6);
}

.PresentatioVideo {
  max-width: 620px;
  box-shadow: 0 -0em 3em rgba(207, 115, 243, 0.945), 0.3em 0.3em 1em rgba(255, 255, 255, 0.123);
}



button:hover {
  background-color: #3e4593;
}

.hrSub {
  opacity: 0.2;
  margin: 200px;
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

/*aqui va el efecto de desenfoque en las cartas papu uwu*/
 
.section2:hover .card:not(:hover) {
  opacity: 0.5;
  filter: blur(2px);
  transform: translateY(0);
  transition: all 0.3s ease;
}

.card:hover {
  opacity: 1;
  filter: blur(0);
  transform: translateY(-15px);
  z-index: 1;
  transition: all 0.3s ease;
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
