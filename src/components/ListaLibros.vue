<template>
  <div class="container-lg">
    <div class="row mb-4">
      <div class="col-md-12 text-center">
        <h1>Lista de Libros</h1>
      </div>
      <div class="col-md-6 offset-md-3">
        <input
          type="text"
          class="form-control"
          v-model="filtroCategoria"
          placeholder="Buscar libros..."
        />
      </div>
    </div>

    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
        v-for="libro in librosFiltrados"
        :key="libro.titulo"
      >
        <div class="card h-100 w-100">
          <img
            class="card-img-top"
            :src="libro.imagen"
            :alt="libro.titulo"
          />
          <div class="card-body text-center">
            <h5 class="card-title">{{ libro.titulo }}</h5>
            <p class="card-text">{{ libro.autor }}</p>
            <p class="card-text">{{ libro.categoria }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { obtenerLibros } from '../services/librosService'

const libros = ref([])
const filtroCategoria = ref('')

onMounted(async () => {
  libros.value = await obtenerLibros()
})

const librosFiltrados = computed(() =>
  libros.value.filter((libro) =>
    libro.categoria.toLowerCase().includes(filtroCategoria.value.toLowerCase())
  )
)
</script>

<style scoped>
.col-width {
  width: 90%;
}
</style>
