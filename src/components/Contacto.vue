<template>
  <div class="container-fluid mt-4 p-3 background">
    <div class="container-xl mb-4">
      <div class="row text-center">
        <h2>Formulario de contacto</h2>
      </div>
      <form @submit.prevent="enviarFormulario">
        <div class="row m-3">
          <div class="col">
            <input v-model="form.nombre" type="text" class="form-control" placeholder="Nombre" />
          </div>
          <div class="col">
            <input v-model="form.apellido" type="text" class="form-control" placeholder="Apellido" />
          </div>
        </div>
        <div class="row m-3">
          <div class="col">
            <input v-model="form.celular" type="tel" class="form-control" placeholder="Celular" />
          </div>
          <div class="col">
            <input v-model="form.email" type="email" class="form-control" placeholder="Correo electrónico" />
          </div>
        </div>
        <div class="row m-3">
          <div class="col">
            <textarea v-model="form.mensaje" class="form-control" rows="3" placeholder="Mensaje"></textarea>
          </div>
        </div>
        <div class="row m-3">
          <div class="col">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nombre: '',
  apellido: '',
  celular: '',
  email: '',
  mensaje: ''
})

function enviarFormulario() {
  alert('Formulario enviado:\n' + JSON.stringify(form, null, 2))
}
</script>

<style scoped>
.background {
  background-color: #e9e9e9;
}
</style>
