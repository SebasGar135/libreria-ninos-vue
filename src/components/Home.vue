<template>
  <div class="banner">
    <h2>Bienvenido al mundo de los libros</h2>
    <p>
      Historias mágicas, criaturas fantásticas y aventuras inolvidables te esperan al otro lado de la pantalla.
      ¡Prepárate para vivir momentos únicos, aprender jugando y soñar sin límites!
    </p>
    <button class="boton-divertido">Explora ahora</button>
  </div>

  <div class="colecciones">
    <h2>Colecciones fantásticas</h2>
    <div class="libros">
      <div class="libro" v-for="(item, index) in colecciones" :key="index">
        <img :src="item.img" :alt="item.alt" />
        <p>{{ item.nombre }}</p>
      </div>
    </div>
  </div>

  <div class="container-fluid p-0 m-0">
    <ListaLibros />
  </div>
  <div class="container-fluid p-0 m-0">
    <Contacto />
  </div>
</template>

<script setup>
import ListaLibros from '../components/ListaLibros.vue'
import Contacto from '../components/Contacto.vue'

const colecciones = [
  { img: '/libro1.png', alt: 'libro de misterio', nombre: 'Misterio' },
  { img: '/img2.png', alt: 'libro de ficción', nombre: 'Ficción' },
  { img: '/img3.png', alt: 'libro de aventuras', nombre: 'Aventuras' },
  { img: '/img4.png', alt: 'libro de amor', nombre: 'Amor' },
  { img: '/img5.png', alt: 'libro de miedo', nombre: 'Miedo' },
  { img: '/img6.png', alt: 'libro de princesas', nombre: 'Princesas' },
]
</script>

<style scoped>
.banner {
  background-image: url('/banner.png');
  background-size: cover;
  background-position: center !important;
  height: 60vh;
  width: 100vw; /* ancho total de la pantalla */
  margin-left: calc(-50vw + 50%); /* 👈 esta línea alinea el banner al borde izquierdo */
  padding: 80px;
  margin-top: -30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  font-family: 'Comic Sans MS', 'Fredoka', cursive;
  gap: 20px;
}



.banner p {
  font-size: 22px;
}

.boton-divertido {
  background-color: #ffcc00;
  color: #744107;
  font-size: 1.5rem;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
  position: relative;
  animation: rebote 2s infinite;
}

.boton-divertido:hover {
  transform: scale(1.1) rotate(-2deg);
  background-color: #ff9900;
}

@keyframes rebote {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.colecciones {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
  padding: 40px;
}

.colecciones h2 {
  color: rgb(33, 138, 103);
}

.colecciones p {
  font-size: 18px;
  color: #744107;
  font-weight: bold;
}

.libros {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
}

.libro {
  width: calc(100% / 6);
  padding: 10px;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  .libro {
    width: calc(100% / 4); /* 4 por fila */
  }
}

@media (max-width: 768px) {
  .libro {
    width: 50%; /* 2 por fila */
  }
}

@media (max-width: 480px) {
  .libro {
    width: 100%; /* 1 por fila */
  }
}


.libros img {
  width: 70%;
  cursor: pointer;
}

.libros img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
</style>
