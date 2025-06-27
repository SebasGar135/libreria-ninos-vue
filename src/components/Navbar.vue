<template>
  <nav class="barra-navegacion">
    <div class="logo-container">
      <span class="texto-logo">Búho Lector</span>
    </div>
    <div class="menu-derecha">
      <!-- Aquí puedes añadir enlaces o botones si lo necesitas -->
    </div>
  </nav>
</template>

<style scoped>
.barra-navegacion {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px  2rem;
  background: #D18971;
  box-shadow: 0 2px 4px #0001;
}

.logo-container {
  display: flex;
  align-items: center;
}

.texto-logo {
  font-family: 'Fredoka', cursive;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
}

.menu-derecha {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
</style>
