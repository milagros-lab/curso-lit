import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom", // Simula el DOM en los tests
  },
  server: {
    open: true, // Para abrir el navegador automáticamente
    port: 5173,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/global.scss" as *;`, // Asegúrate de que la ruta sea correcta
      },
    },
  },
});
