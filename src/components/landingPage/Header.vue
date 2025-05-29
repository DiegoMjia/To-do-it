<script setup lang="ts">
</script>

<template>
    <header class="navbar-container">
      <nav class="navbar">
        <div class="logo">
          <img width="50" height="50" src="/src/assets/img/X logo.png" alt="logo" title="Logo X">
            
        </div>
        
        <div class="nav-links">
          <a href="#" class="nav-link">CONTACTO</a>
          <a href="#" class="nav-link">ACERCA DE NOSOTROS</a>
          <a href="#" class="nav-link">DONACIONES</a>
          <a href="#" class="login-btn">
            Log in
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .navbar-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #262729;
    border-radius: 0.5rem;
    background-color: #262729;
    /* Agregando sombra similar a la que usas en tu proyecto */
    box-shadow: inset 0 -3em 3em rgba(130, 138, 255, 0.1), 0.3em 0.3em 1em rgba(134, 18, 150, 0.2);
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo svg {
    width: 2rem;
    height: 2rem;
    fill: #414bb2; /* Color similar al de tu botón */
  }
  
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  .nav-link {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .nav-link:hover {
    color: #414bb2;
    transform: translateY(-2px);
  }
  
  .login-btn {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  .login-btn:hover {
    color: #414bb2;
    transform: translateY(-2px);
  }
  
  .login-btn svg {
    margin-left: 0.25rem;
    width: 1rem;
    height: 1rem;
  }
  
  /* Agregando el efecto de desenfoque similar al que tienes en las tarjetas */
  .nav-links:hover .nav-link:not(:hover) {
    opacity: 0.7;
    filter: blur(1px);
    transition: all 0.3s ease;
  }
  </style>