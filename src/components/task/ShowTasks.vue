<script setup lang="ts">

const tasks = [
  {
    task: "comprar el pan",
    priority: "🔴 alta",
    date: "📅 2-05-2030",
    status: "realizada",
    icon: "✅",
    description: "Lo voy a compra en el supermercado.",
  },
  {
    task: "Ir a la playa",
    priority: "🔴 alta",
    date: "📅 2-05-2030",
    status: "pendiente",
    icon: "🐎",
  },
  {
    task: "Comprar un teclado",
    priority: "🟡 media",
    date: "📅 2-05-2030",
    status: "borrada",
    icon: "🐎",
    description: "Lo voy a compra en el supermercado.",
  },
  {
    task: "Comprar lentejitas",
    priority: "🟢 baja",
    date: "📅 2-05-2030",
    status: "realizada",
    icon: "✅",
  },
  {
    task: "Estudiar Vue.js",
    priority: "🔴 alta",
    date: "📅 3-05-2030",
    status: "pendiente",
    icon: "📚",
  },
  {
    task: "Regar las plantas",
    priority: "🟢 baja",
    date: "📅 3-05-2030",
    status: "realizada",
    icon: "🪴",
  },
  {
    task: "Llamar a la abuela",
    priority: "🟡 media",
    date: "📅 4-05-2030",
    status: "pendiente",
    icon: "📞",
  },
  {
    task: "Hacer ejercicio",
    priority: "🟡 media",
    date: "📅 4-05-2030",
    status: "pendiente",
    icon: "🏋️",
  },
  {
    task: "Lavar la ropa",
    priority: "🔴 alta",
    date: "📅 4-05-2030",
    status: "borrada",
    icon: "🧺",
  },
  {
    task: "Escribir diario",
    priority: "🟢 baja",
    date: "📅 5-05-2030",
    status: "realizada",
    icon: "📓",
  },
];
</script>

<template>
  <div class="gridContainer">
    <div
      class="titlePresentationContainer"
      style="text-align: start; padding: 15px"
    >
      <h2 class="title">
        <span style="font-size: 30px">🌟</span>Mira tus tareas
      </h2>
      
      <div class="calendar-section">
        <Calendario />
      </div>
      <div class="pendingTasks">
        <h2>📋Tareas pendientes</h2>
        <div
          class="container"
          v-for="task in tasks.filter((t) => t.status === 'pendiente')"
          :key="task.task"
        >
          <span class="taskFixed">⌛</span>
          <div class="task">
            <p>{{ task.task }}</p>
            <p>{{ task.priority }}</p>
            <p>{{ task.date }}</p>
            <span class="description" v-if="task.description">{{
              task.description
            }}</span>
          </div>
          <div class="containerIcons">
            <div class="refresh"></div>
            <div class="edit"></div>
            <div class="trash"></div>
          </div>
        </div>
      </div>
      <span class="titleSection">✏️Tareas realizadas</span>
    </div>
    <div class="taskCompleted content1">
      <div
        class="container"
        v-for="task in tasks.filter((t) => t.status === 'realizada')"
        :key="task.task"
      >
        <span class="taskFixed">✅</span>
        <div class="task">
          <p>{{ task.task }}</p>
          <p>{{ task.priority }}</p>
          <p>{{ task.date }}</p>
          <span class="description" v-if="task.description">{{
            task.description
          }}</span>
        </div>
        <div class="containerIcons">
          <div class="refresh"></div>
          <div class="edit"></div>
          <div class="trash"></div>
        </div>
      </div>
    </div>

    <div class="trashTasks">
      <h2>🗑️Tareas borradas</h2>
      <div
        class="container"
        v-for="task in tasks.filter((t) => t.status === 'borrada')"
        :key="task.task"
      >
        <span class="taskFixed">❌</span>
        <div class="task">
          <p>{{ task.task }}</p>
          <p>{{ task.priority }}</p>
          <p>{{ task.date }}</p>
          <span class="description" v-if="task.description">{{
            task.description
          }}</span>
        </div>
        <div class="containerIcons">
          <div class="refresh"></div>
          <div class="edit"></div>
          <div class="trash"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gridContainer {
  font-weight: bolder;
  font-size: 18px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 80%;
  height: 80%;
  position: absolute;
  top: 40%;
  left: 60%;
  transform: translate(-50%, -50%);
}

.calendar-section {
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
}

.description {
  font-size: 10px;
  align-items: center;
  display: inline-flex;
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
}

.trashTasks {
  text-align: start;
  padding: 15px;
}

.pendingTasks {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  text-align: left;
  padding: 15px;
  gap: 15px;
}

.taskFixed {
  padding: 15px;
  font-size: 25px;
  display: flex;
  align-items: center;
}

.content1 {
  text-align: left;
  padding: 15px;
}

.refresh {
  cursor: pointer;
  background-image: url("/src/assets/tasksIcons/ReloadIcons/reloadWhite.svg");
  background-size: cover;
  width: 30px;
  height: 30px;
}

.edit {
  cursor: pointer;
  background-image: url("/src/assets/tasksIcons/pencilIcon/pencilWhite.svg");
  background-size: cover;
  width: 30px;
  height: 30px;
}

.trash {
  cursor: pointer;
  background-image: url("/src/assets/tasksIcons/trashIcon/trashWhite.svg");
  background-size: cover;
  width: 30px;
  height: 30px;
}

.containerIcons {
  display: flex;
  align-items: center;
  margin-left: 20px;
  gap: 15px;
}

.task {
  display: flex;
  width: 50%;
  gap: 30px;
  border: rgba(255, 255, 255, 0.358) 1px solid;
  border-radius: 10px;
  padding: 15px;
}

.task:has(.description) {
  height: 70px;
}

.taskCompleted {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.titleSection {
  font-size: 20px;
  margin-bottom: 20px;
}

.separator {
  width: 99%;
  height: 1px;
  border: 1px solid rgba(255, 255, 255, 0.218);
}

.title {
  margin-bottom: 25px;
}
</style>
