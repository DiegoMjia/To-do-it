<script setup lang="ts"></script>

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
        <button>¡Empezar!</button>
      </section>
      <lite-youtube
        videoid="H0Sbna9rxog"
        class="PresentatioVideo"
      ></lite-youtube>
    </div>
    <hr class="hrSub" />
  </div>
</template>

<style>
button {
  background-color: #414bb2;
}

.ContainerMain1 {
  display: flex;
  height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

.PresentatioVideo {
  max-width: 620px;
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
