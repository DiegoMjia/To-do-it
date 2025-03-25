import { defineStore } from "pinia";

//Se define como almacen de estados.
export const useThemeStore = defineStore("theme", {
  //Devuelve un objeto con varianles que queremos almacenar.
  state: () => ({
    isLightTheme: localStorage.getItem("isLightTheme") === "true",
  }),

  actions: {
    toggleTheme() {
      this.isLightTheme = !this.isLightTheme;
      localStorage.setItem("isLightTheme", this.isLightTheme.toString());
    },

    setTheme(theme: boolean) {
      this.isLightTheme = theme;
      localStorage.setItem("isLightTheme", theme.toString());
    },
  },
});
